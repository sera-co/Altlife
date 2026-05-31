const { Book } = require('../models');
const { bookSchema } = require('../services/validationSchemas');

async function createBook(req, res) {
  const parse = bookSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  const created = await Book.create({ title: parse.data.title, author: parse.data.author });
  return res.status(201).json(created);
}

async function listBooks(req, res) {
  const books = await Book.findAll({ order: [['id', 'ASC']] });
  return res.status(200).json(books);
}

async function getBook(req, res) {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
}

async function updateBook(req, res) {
  const { id } = req.params;
  const existing = await Book.findByPk(id);
  if (!existing) return res.status(404).json({ message: 'Book not found' });

  const parse = bookSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: 'Invalid payload', errors: parse.error.issues });
  }

  await existing.update({ title: parse.data.title, author: parse.data.author });
  return res.status(200).json(existing);
}

module.exports = { createBook, listBooks, getBook, updateBook };

