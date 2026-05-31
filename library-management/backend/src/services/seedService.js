const { sequelize } = require('../config/sequelize');

async function ensureSeeded() {
  // Lightweight check: if any Members rows exist, assume seeded.
  // The system uses unquoted table names in queries elsewhere, so check both casing variants.
  const rows = await sequelize.query(
    `SELECT COUNT(*)::int AS count FROM members;`,
    { type: sequelize.QueryTypes.SELECT }
  );

  if (!rows || rows[0]?.count > 0) return;


  // Seed via SQL files.
  const fs = require('fs');
  const path = require('path');

  const schemaPath = path.join(__dirname, '..', '..', 'schema.sql');
  const seedPath = path.join(__dirname, '..', '..', 'seed.sql');

  const schemaSql = fs.readFileSync(schemaPath, 'utf8');
  const seedSql = fs.readFileSync(seedPath, 'utf8');

  // Create tables from provided SQL; then insert sample data.
  await sequelize.query(schemaSql);
  await sequelize.query(seedSql);
}

module.exports = { ensureSeeded };

