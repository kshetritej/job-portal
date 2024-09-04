const mongoose = require("mongoose");

const connectDB = async (err) => {
  if (err) return 0
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected`.green.bold);
  return 1
};

module.exports = connectDB;
