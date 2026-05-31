const { Member } = require('../models');
const { memberSchema } = require('../services/validationSchemas');

async function createMember(req, res) {
  const parse = memberSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  const created = await Member.create({ memberName: parse.data.memberName });
  return res.status(201).json(created);
}

async function listMembers(req, res) {
  const members = await Member.findAll({ order: [['id', 'ASC']] });
  return res.status(200).json(members);
}

async function getMember(req, res) {
  const { id } = req.params;
  const member = await Member.findByPk(id);
  if (!member) return res.status(404).json({ message: 'Member not found' });
  return res.status(200).json(member);
}

async function updateMember(req, res) {
  const { id } = req.params;
  const existing = await Member.findByPk(id);
  if (!existing) return res.status(404).json({ message: 'Member not found' });

  const parse = memberSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  await existing.update({ memberName: parse.data.memberName });
  return res.status(200).json(existing);
}

module.exports = { createMember, listMembers, getMember, updateMember };

