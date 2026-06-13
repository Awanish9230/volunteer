const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  dob: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other', 'Prefer not to say'] },
  address: {
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
  },
  professionalDetails: {
    education: { type: String },
    skills: [{ type: String }],
    interests: [{ type: String }],
    experience: { type: String },
  },
  availability: { type: String, enum: ['Weekdays', 'Weekends', 'Both'] },
  emergencyContact: {
    name: { type: String },
    relation: { type: String },
    phoneNumber: { type: String },
  }
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
