const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const adminExists = await User.findOne({ email: 'admin@volunlink.com' });
    
    if (adminExists) {
      console.log('Admin already exists!');
      process.exit();
    }

    const admin = await User.create({
      name: 'Super Admin',
      email: 'admin@volunlink.com',
      password: hashedPassword,
      phone: '1234567890',
      role: 'Admin'
    });

    console.log('Admin User Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
