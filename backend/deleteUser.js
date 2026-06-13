const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const deleteDb = async () => {
  try {
    await connectDB();
    await User.deleteOne({ email: 'awanishverma864@gmail.com' });
    console.log('Deleted orphaned user');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

deleteDb();
