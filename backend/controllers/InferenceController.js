// 0G Inferencing Controller
const express = require("express");
const { ethers } = require("ethers");
const { createZGComputeNetworkBroker } = require("@0glabs/0g-serving-broker");
const winston = require("winston");
const config = require("../config/envConfig");

const app = express();
const RPC_URL = config.RPC_URL;
const PRIVATE_KEY = config.PRIVATE_KEY;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.json(),
  defaultMeta: { service: "zg-broker-service", createdBy: "NoN-Zero" },
  transports: [new winston.transports.Console()],
});

let broker;
let provider;

async function setBroker() {
  try {
    logger.info("Initializing broker...");

    if (!RPC_URL) throw new Error("RPC_URL missing");
    if (!PRIVATE_KEY) throw new Error("PRIVATE_KEY missing");

    provider = new ethers.JsonRpcProvider(RPC_URL);

    const blockNumber = await provider.getBlockNumber();
    if (!blockNumber && blockNumber !== 0) {
      throw new Error("Invalid RPC: cannot fetch block number");
    }

    const network = await provider.getNetwork();

    logger.info("RPC validated", {
      blockNumber,
      chainId: network.chainId.toString(),
      name: network.name,
    });

    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    const balance = await provider.getBalance(wallet.address);

    logger.info("Wallet validated", {
      address: wallet.address,
      balance: ethers.formatEther(balance),
    });

    if (balance === 0n) {
      logger.warn("Wallet has zero balance");
    }

    broker = await createZGComputeNetworkBroker(wallet);

    if (!broker) {
      throw new Error("Broker initialization returned null");
    }

    console.log(broker);
    console.log(broker.inference);
    console.log("KEYS:", Object.keys(broker));

    if (broker.inference) {
      console.log(Object.keys(broker.inference));
    }

    logger.info("Broker initialized", {
      rpcUrl: RPC_URL,
      walletAddress: wallet.address,
    });

    const contractAddress = broker?.inference.contractAddress || null;

    if (!contractAddress) {
      throw new Error("Contract address missing from broker");
    }

    const code = await provider.getCode(contractAddress);

    if (code === "0x") {
      throw new Error(
        `No contract deployed at ${contractAddress} (wrong network or SDK issue)`,
      );
    }

    logger.info("Contract validated", {
      contractAddress,
      codeSize: code.length,
    });

    return {
      success: true,
      network,
      blockNumber,
      wallet: wallet.address,
      contractAddress,
    };
  } catch (err) {
    logger.error("Broker setup failed", {
      error: err.message,
      stack: err.stack,
    });

    return {
      success: false,
      error: err.message,
    };
  }
}

async function listServices() {
  if (!broker) {
    throw new Error("Broker not initialized. Call setBroker() first.");
  }

  try {
    console.log("Fetching available services...");
    const services = await broker.inference.listService();
    console.log(`Found ${services.length} available services`);

    const categorized = {
      total: services.length,
      chatbot: services.filter((s) => s.serviceType === "chatbot"),
      textToImage: services.filter((s) => s.serviceType === "text-to-image"),
      speechToText: services.filter((s) => s.serviceType === "speech-to-text"),
    };

    logger.info("Services fetched", {
      total: categorized.total,
      chatbotCount: categorized.chatbot.length,
      imageCount: categorized.textToImage.length,
      speechCount: categorized.speechToText.length,
    });

    return categorized;
  } catch (err) {
    logger.error("Failed to list services", {
      error: err.message,
      stack: err.stack,
    });
    throw err;
  }
}

async function verifyResult() {
  if (!broker || !provider) {
    throw new Error("Broker not initialized. Call setBroker() first.");
  }

  try {
    const result = await broker.inference.verifyService(provider, (step) => {
      logger.info("Verification step", { step });
    });

    const structuredResult = {
      signerMatch: result.signerVerification.allMatch,
      composePassed: result.composeVerification.passed,
      dockerImages: result.dockerImages,
      outputDirectory: result.outputDirectory,
    };

    if (structuredResult.signerMatch && structuredResult.composePassed) {
      logger.info("Verification passed", structuredResult);
    } else {
      logger.warn("Verification failed", structuredResult);
    }

    return structuredResult;
  } catch (err) {
    logger.error("Verification failed", {
      error: err.message,
      stack: err.stack,
    });
    throw err;
  }
}

async function InferenceRequest() {
  const messages = {
    role: "user",
    content:
      "Create me a circom zero-knowledge proof of ageContract in which we are generating a cricuit for if age is less than 18",
  };

  const { endpoint, model } = await broker.inference.getServiceMetadata(
    provider,
  );
  const headers = await broker.inference.getRequestHeaders(provider);

  const response = await fetch(`${endpoint}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ messages, model }),
  });

  const data = await response.json();

  let chatID =
    response.headers.get("ZG-Res-Key") || response.headers.get("zg-res-key");
  if (!chatID) {
    chatID = data.id || data.chatID;
  }

  if (chatID) {
    const isValid = await broker.inference.processResponse(provider, chatID);
    console.log("Response valid:", isValid);
  }
}

module.exports = {
  setBroker,
  listServices,
  verifyResult,
  InferenceRequest,
};
