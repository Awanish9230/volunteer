const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  certificateId: { type: String, required: true, unique: true },
  issueDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
