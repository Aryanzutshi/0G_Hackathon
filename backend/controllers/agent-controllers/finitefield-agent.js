// Finite Field Checker Agent
const { Agent, run } = require("@openai/agents");
const { OpenAI } = require("openai");
const config = require("../../config/envConfig");

const AgentInstruction = `You are tasked with checking the following conditions in a circom zero-knowledge proof
    1) All operations are mod p (no hidden overflows)
    2) No accidental integer assumptions (like division behaving normally)
    3) Field-specific edge cases (e.g., inverses, zero constraints)`;

async function FiniteFieldAgent(req, res) {
  const openAIClient = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });

  const finiteFieldAgent = new Agent({
    name: "FiniteFieldAgent_0.0.1",
    instructions: AgentInstruction,
    model: "gpt-5.4",
    openAIClient,
  });

  const result = await run(finiteFieldAgent, req.body);
  console.log("Agent Successfully did the work");
}

exports.module = { FiniteFieldAgent };