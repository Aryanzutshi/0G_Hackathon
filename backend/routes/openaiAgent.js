// Agents Route
const express = require('express');
const SyntaxController = require('../controllers/syntax-agent');
const DocController = require('../controllers/doc-agent');
const finiteController = require('../controller/finitefield-agent');

const app = express();

// Syntax Agent Route
app.post('/run-syntax-agent', SyntaxController.SyntaxAgent);

// Documentation Agent Route
app.post('/run-doc-agent', DocController.DocumentationAgent);

// Finite Field Agent Route
app.post('/run-finitefield-agent', finiteController.FiniteFieldAgent);