const express = require('express');
const router = express.Router();
const { getCertificates, createCertificate } = require('../controllers/certificateController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getCertificates)
  .post(protect, admin, createCertificate);

module.exports = router;
