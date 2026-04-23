// Documentation Agent
const { Agent, run } = require("@openai/agents");
const { OpenAI } = require("openai");
const config = require("../../config/envConfig");

async function DocumentationAgent(req, res) {
  const openaiClient = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });

  const docSequenceDiagram = new Agent({
    name: "DocSQ-Agent_0.0.1",
    instructions:
      "You create Sequence Diagrams according to the code you are given",
  });

  const docComponentDiagram = new Agent({
    name: "DocAD-Agent_0.0.1",
    instructions:
      "You create Architecture/Coding Diagram according to the code you are given",
  });

  const docFlowchartDiagram = new Agent({
    name: "DocFD-Agent_0.0.1",
    instructions:
      "You create Flowchart Diagrams according to the code you are given",
  });

  const docEntityDiagrams = new Agent({
    name: "DocED-Agent_0.0.1",
    instructions:
      "You create Entity Diagrams according to the code you are given",
  });

  const docAgent = Agent.create({
    name: "Doc-Agent_0.0.1",
    instructions:
      "You are tasked with routing the code to the right diagram specialist to understand the code",
    handoffs: [
      docSequenceDiagram,
      docComponentDiagram,
      docFlowchartDiagram,
      docEntityDiagrams,
    ],
    openaiClient,
  });

  const result = await run(
    docAgent, req.body);

  console.log(result.finalOutput);
}

exports.module = { DocumentationAgent };
