// Inferencing Route
const express = require('express');
const inferenceController = require('../controllers/InferenceController');
const openaiInferencing = require('../controllers/OpenaiController');

const app = express();

app.post('/inference-blockchain', inferenceController.InferenceRequest);
app.post('/inference-openai', openaiInferencing.OpenAIController);