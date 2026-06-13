const express = require('express');
const router = express.Router();
const { getVolunteers, getVolunteerById, createVolunteer, updateVolunteer, deleteVolunteer } = require('../controllers/volunteerController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, admin, getVolunteers)
  .post(protect, createVolunteer);

router.route('/:id')
  .get(protect, getVolunteerById)
  .put(protect, updateVolunteer)
  .delete(protect, admin, deleteVolunteer);

module.exports = router;
