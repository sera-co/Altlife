const { Issuance, Member, Book } = require('../models');
const { issuanceSchema } = require('../services/validationSchemas');

async function createIssuance(req, res) {
  const parse = issuanceSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  const { memberId, bookId, issuedDate, targetReturnDate } = parse.data;

  // FK existence checks (cleaner errors)
  const member = await Member.findByPk(memberId);
  if (!member) return res.status(400).json({ message: 'Invalid memberId' });
  const book = await Book.findByPk(bookId);
  if (!book) return res.status(400).json({ message: 'Invalid bookId' });

  const created = await Issuance.create({ memberId, bookId, issuedDate, targetReturnDate });
  return res.status(201).json(created);
}

async function listIssuances(req, res) {
  const items = await Issuance.findAll({
    include: [Member, Book],
    order: [['id', 'ASC']]
  });
  return res.status(200).json(items);
}

async function getIssuance(req, res) {
  const { id } = req.params;
  const item = await Issuance.findByPk(id, { include: [Member, Book] });
  if (!item) return res.status(404).json({ message: 'Issuance not found' });
  return res.status(200).json(item);
}

async function updateIssuance(req, res) {
  const { id } = req.params;
  const existing = await Issuance.findByPk(id);
  if (!existing) return res.status(404).json({ message: 'Issuance not found' });

  const parse = issuanceSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  const { memberId, bookId, issuedDate, targetReturnDate } = parse.data;

  const member = await Member.findByPk(memberId);
  if (!member) return res.status(400).json({ message: 'Invalid memberId' });
  const book = await Book.findByPk(bookId);
  if (!book) return res.status(400).json({ message: 'Invalid bookId' });

  await existing.update({ memberId, bookId, issuedDate, targetReturnDate });
  return res.status(200).json(existing);
}

module.exports = { createIssuance, listIssuances, getIssuance, updateIssuance };

