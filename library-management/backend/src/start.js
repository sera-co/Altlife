const { sequelize } = require('./config/sequelize');
const { ensureSeeded } = require('./services/seedService');
const app = require('./app');

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    await ensureSeeded();

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend listening on port ${PORT}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();

