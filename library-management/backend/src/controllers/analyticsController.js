const { sequelize } = require('../config/sequelize');

async function booksNeverBorrowed(req, res) {
  const rows = await sequelize.query(
    `SELECT b.title AS "bookName", b.author
     FROM books b
     LEFT JOIN issuances i ON i.bookId = b.id
     WHERE i.id IS NULL
     ORDER BY b.id ASC;`,
    { type: sequelize.QueryTypes.SELECT }
  );
  return res.status(200).json(rows);
}

async function outstandingBooks(req, res) {
  const rows = await sequelize.query(
    `SELECT 
        m.memberName AS "memberName",
        b.title AS "bookName",
        i.issuedDate AS "issuedDate",
        i.targetReturnDate AS "targetReturnDate",
        b.author AS "author"
     FROM issuances i
     INNER JOIN members m ON m.id = i.memberId
     INNER JOIN books b ON b.id = i.bookId
     WHERE i.targetReturnDate >= CURRENT_DATE
     ORDER BY i.targetReturnDate ASC, i.id ASC;`,
    { type: sequelize.QueryTypes.SELECT }
  );
  return res.status(200).json(rows);
}

async function top10MostBorrowedBooks(req, res) {
  const rows = await sequelize.query(
    `SELECT
        b.title AS "bookName",
        COUNT(i.id)::INT AS "timesBorrowed",
        COUNT(DISTINCT i.memberId)::INT AS "uniqueMembers"
     FROM books b
     INNER JOIN issuances i ON i.bookId = b.id
     GROUP BY b.id
     ORDER BY timesBorrowed DESC, b.id ASC
     LIMIT 10;`,
    { type: sequelize.QueryTypes.SELECT }
  );
  return res.status(200).json(rows);
}

module.exports = { booksNeverBorrowed, outstandingBooks, top10MostBorrowedBooks };

