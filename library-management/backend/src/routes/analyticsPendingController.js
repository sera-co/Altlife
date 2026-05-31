const { sequelize } = require('../config/sequelize');

async function booksDueToday(req, res) {
  // pending for return today: targetReturnDate == CURRENT_DATE
  const rows = await sequelize.query(
    `SELECT 
        m.memberName AS "memberName",
        b.title AS "bookName",
        i.issuedDate AS "issuedDate",
        i.targetReturnDate AS "targetReturnDate"
     FROM issuances i
     INNER JOIN members m ON m.id = i.memberId
     INNER JOIN books b ON b.id = i.bookId
     WHERE i.targetReturnDate = CURRENT_DATE
     ORDER BY m.memberName ASC, b.title ASC;`,
    { type: sequelize.QueryTypes.SELECT }
  );

  return res.status(200).json(rows);
}

module.exports = { booksDueToday };

