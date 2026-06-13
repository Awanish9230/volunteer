const Volunteer = require('../models/Volunteer');
const User = require('../models/User');

// @desc    Get all volunteers
// @route   GET /api/volunteers
// @access  Private/Admin
const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate('userId', 'name email phone role profileImage');
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get volunteer by ID
// @route   GET /api/volunteers/:id
// @access  Private
const getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id).populate('userId', 'name email phone');
    if (volunteer) {
      res.json(volunteer);
    } else {
      res.status(404).json({ message: 'Volunteer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create volunteer profile
// @route   POST /api/volunteers
// @access  Private
const createVolunteer = async (req, res) => {
  try {
    const { dob, gender, address, professionalDetails, availability, emergencyContact } = req.body;
    
    // Check if volunteer profile already exists for this user
    const exists = await Volunteer.findOne({ userId: req.user._id });
    if (exists) {
      return res.status(400).json({ message: 'Volunteer profile already exists' });
    }

    const volunteer = await Volunteer.create({
      userId: req.user._id,
      dob,
      gender,
      address,
      professionalDetails,
      availability,
      emergencyContact
    });

    res.status(201).json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update volunteer profile
// @route   PUT /api/volunteers/:id
// @access  Private
const updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    // Check user
    if (volunteer.userId.toString() !== req.user.id && req.user.role !== 'Admin') {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedVolunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVolunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete volunteer
// @route   DELETE /api/volunteers/:id
// @access  Private/Admin
const deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    await volunteer.deleteOne();
    res.json({ message: 'Volunteer removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getVolunteers,
  getVolunteerById,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer
};
