const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { sequelize } = require('./config/sequelize');
const { apiKeyAuth } = require('./middleware/apiKeyAuth');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandlers');

const memberRoutes = require('./routes/memberRoutes');
const bookRoutes = require('./routes/bookRoutes');
const issuanceRoutes = require('./routes/issuanceRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const { ensureSeeded } = require('./services/seedService');

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API key required for all routes under /api
app.use('/api', apiKeyAuth);

app.use('/api/members', memberRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/issuances', issuanceRoutes);
app.use('/api/analytics', analyticsRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;


