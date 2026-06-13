const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Volunteer = require('./models/Volunteer');
const connectDB = require('./config/db');

dotenv.config();

const checkDb = async () => {
  try {
    await connectDB();
    const users = await User.find({});
    console.log('Users in DB:', users.length, users.map(u => ({ name: u.name, role: u.role })));

    const volunteers = await Volunteer.find({});
    console.log('Volunteers in DB:', volunteers.length, volunteers);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

checkDb();
