const required = ['API_KEY', 'DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];

function validateEnv() {
  for (const k of required) {
    if (!process.env[k]) {
      throw new Error(`Missing environment variable: ${k}`);
    }
  }
}

module.exports = { validateEnv };

