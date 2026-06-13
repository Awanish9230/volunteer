const Certificate = require('../models/Certificate');
const crypto = require('crypto');

// @desc    Get all certificates
// @route   GET /api/certificates
// @access  Private
const getCertificates = async (req, res) => {
  try {
    if (req.user.role === 'Admin') {
      const certificates = await Certificate.find().populate('volunteerId', 'name email').populate('eventId', 'title date');
      res.json(certificates);
    } else {
      const certificates = await Certificate.find({ volunteerId: req.user._id }).populate('eventId', 'title date');
      res.json(certificates);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new certificate
// @route   POST /api/certificates
// @access  Private/Admin
const createCertificate = async (req, res) => {
  try {
    const { volunteerId, eventId } = req.body;

    const exists = await Certificate.findOne({ volunteerId, eventId });
    if (exists) {
      return res.status(400).json({ message: 'Certificate already issued for this event' });
    }

    const certificateId = crypto.randomBytes(8).toString('hex').toUpperCase();

    const certificate = await Certificate.create({
      volunteerId,
      eventId,
      certificateId
    });

    res.status(201).json(certificate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getCertificates,
  createCertificate
};
