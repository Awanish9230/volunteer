const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  capacity: { type: Number, required: true },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['Upcoming', 'Ongoing', 'Completed'], default: 'Upcoming' }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
