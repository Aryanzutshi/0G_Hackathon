// Syntax Checker Agent
const { Agent, run } = require("@openai/agents");
const { OpenAI } = require("openai");
const config = require("../../config/envConfig");

async function SyntaxAgent() {
  const openaiClient = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });

  const syntaxAgent = new Agent({
    name: "Syntax-Agent_0.0.1",
    instructions:
      "You check for syntax errors in zero-knowledge circuits in Circom",
    model: "gpt-5.4",
    openaiClient,
  });

  const result = await run(
    syntaxAgent,
    `pragma circom 2.0.0

template BadMultiplier(n) {
    signal input a;
    signal input b
    signal output out;

    signal temp[n];

    for (var i = 0; i <= n; i++) {   // off-by-one + potential misuse
        temp[i] <== a * b
    }

    out <== temp;   // assigning array to single signal (invalid)
}

component main = BadMultiplier(5`,
  );

  console.log(result.finalOutput);
}

exports.module = { SyntaxAgent }; 