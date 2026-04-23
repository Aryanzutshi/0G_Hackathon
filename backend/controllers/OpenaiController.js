// OpenAI Inferencing
// Not Done yet
const { OpenAI } = require('openai');
const config = require('../config/envConfig');
const client = new OpenAI();

const systemPrompt = `You are a circom zero knowlege engineer, use all your intellegence to create zero-knowledge proofs`

async function OpenAIController() {
    const openaiClient = new OpenAI({
        apiKey: config.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
        model: "gpt-5.4",
        input: systemPrompt,
    })

    console.log(response.output_text);
}

exports.module = { OpenAIController }