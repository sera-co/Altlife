const express = require('express');
const router = express.Router();
const { booksNeverBorrowed, outstandingBooks, top10MostBorrowedBooks } = require('../controllers/analyticsController');
const { booksDueToday } = require('./analyticsPendingController');


router.get('/books-never-borrowed', booksNeverBorrowed);
router.get('/outstanding-books', outstandingBooks);
router.get('/top-10-most-borrowed-books', top10MostBorrowedBooks);
router.get('/books-due-today', booksDueToday);

module.exports = router;


