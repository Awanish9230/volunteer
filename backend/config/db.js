const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Don't exit process in development if it's just missing a URI or server is off, 
    // but typically it's standard to exit(1).
    // process.exit(1);
  }
};

module.exports = connectDB;
