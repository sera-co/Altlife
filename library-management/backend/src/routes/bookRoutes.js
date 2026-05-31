const express = require('express');
const router = express.Router();
const {
  createBook,
  listBooks,
  getBook,
  updateBook
} = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', listBooks);
router.get('/:id', getBook);
router.put('/:id', updateBook);

module.exports = router;

