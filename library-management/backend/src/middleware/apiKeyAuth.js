function apiKeyAuth(req, res, next) {
  const expected = process.env.API_KEY;
  const provided = req.header('x-api-key');

  if (!expected || !provided || provided !== expected) {
    return res.status(401).json({ message: 'Unauthorized: invalid API key' });
  }

  return next();
}

module.exports = { apiKeyAuth };

