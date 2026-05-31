const { Member } = require('./member');
const { Book } = require('./book');
const { Issuance } = require('./issuance');

// Associations
Member.hasMany(Issuance, { foreignKey: 'memberId' });
Issuance.belongsTo(Member, { foreignKey: 'memberId' });

Book.hasMany(Issuance, { foreignKey: 'bookId' });
Issuance.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = {
  Member,
  Book,
  Issuance
};

