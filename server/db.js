const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // MongoDB connection options
    const options = {
      useNewUrlParser: true,
    };

    // Connecting to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, options);
    
    // Optional: Ensure the connection is successful
    // await mongoose.connection.db.admin().command({ ping: 1 });

    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Exit the process if database connection fails
  }
};

module.exports = connectDB;
