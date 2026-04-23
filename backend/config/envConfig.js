console.log("Loading dotEnv Config");

const path = require("path");
const dotenv = require("dotenv");

const result = dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

if (result.error) {
  console.error("❌ dotenv failed to load:", result.error);
} else {
  console.log("dotenv loaded successfully");
}

const EnvConfig = {
  PORT: Number(process.env.PORT),
  RPC_URL: process.env.RPC_URL,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

function validateEnv() {
  const errors = [];

  const port = EnvConfig.PORT;
  const rpc_url = EnvConfig.RPC_URL;

  if (!port) {
    errors.push("PORT is missing");
  } else if (isNaN(port) || port < 3000 || port > 3005) {
    errors.push("PORT must be a number between 3000 and 3005");
  }

  if (!rpc_url) {
    errors.push("RPC_URL is missing");
  } else {
    try {
      const url = new URL(rpc_url);

      if (!["http:", "https:"].includes(url.protocol)) {
        errors.push("RPC_URL must use http or https");
      }

      if (!url.hostname) {
        errors.push("RPC_URL must have a valid hostname");
      }
    } catch (err) {
      errors.push("RPC_URL is not a valid URL");
    }
  }

  if (!EnvConfig.OPENAI_API_KEY) {
    errors.push("OPENAI_API_KEY is missing");
  }

  if (errors.length > 0) {
    throw new Error("❌ Env validation failed:\n" + errors.join("\n"));
  }
}
validateEnv();

module.exports = EnvConfig;