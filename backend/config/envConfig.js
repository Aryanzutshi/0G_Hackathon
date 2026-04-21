console.log('Loading dotEnv Config');

const dotenv = require('dotenv');
dotenv.config();

EnvConfig = {
  PORT: process.env.PORT,
};

function validateEnv() {
  const errors = [];
  const port = Number(EnvConfig.PORT);

  if (!EnvConfig.PORT) {
    errors.push('PORT is missing');
  }

  if (EnvConfig.PORT && (isNaN(port) || port < 3000 || port > 3005)) {
    errors.push('PORT must be a valid positive number and between 3001 and 3005');
  }

  if (errors.length > 0) {
    throw new Error('❌ Env validation failed:\n' + errors.join('\n'));
  }
}
validateEnv();

module.exports = EnvConfig;
