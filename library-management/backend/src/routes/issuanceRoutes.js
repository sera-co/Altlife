const express = require('express');
const router = express.Router();
const {
  createIssuance,
  listIssuances,
  getIssuance,
  updateIssuance
} = require('../controllers/issuanceController');

router.post('/', createIssuance);
router.get('/', listIssuances);
router.get('/:id', getIssuance);
router.put('/:id', updateIssuance);

module.exports = router;

