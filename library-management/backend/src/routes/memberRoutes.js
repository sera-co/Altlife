const express = require('express');
const router = express.Router();
const {
  createMember,
  listMembers,
  getMember,
  updateMember
} = require('../controllers/memberController');

router.post('/', createMember);
router.get('/', listMembers);
router.get('/:id', getMember);
router.put('/:id', updateMember);

module.exports = router;

