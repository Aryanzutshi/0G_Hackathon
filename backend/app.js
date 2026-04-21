const express = require('express');
const config = require('./config/envConfig');
const helmet = require('helmet');
const winston = require('winston');
const ratelimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
const limiter = ratelimit({
  // How long to remember requests for, in milliseconds.
  windowMs: 15 * 60 * 1000,
  // How many requests to allow.
  limit: 100,
  // Response to return after limit is reached.
  message: async (req, res) => {
    return {
      status: res.status(429),
      data: 'Limit Reached. Try Again after 1 Hour.',
    };
  },
  // Enable the Ratelimit header. Draft-8 is the newest specification
  standardHeaders: 'draft-8',
  // Name associated with the quota policy enforced by this rate limiter.
  identifier: 'global-request-limit',
});

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
});

app.use(helmet());
app.use(limiter);
// Configure it later when Frontend is set and backend is deployed
app.use(cors());

app.listen(config.PORT, () => {
  logger.info(`Starting server on port ${config.PORT}`);
});
