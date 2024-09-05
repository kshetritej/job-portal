const mongoose = require("mongoose");
const {envConfig }= require("./config")

const connectDB = async (err) => {
  if (err) return 0
  await mongoose.connect(envConfig.MONGO_URI);
  console.log(`MongoDB Connected`.green.bold);
  return 1
};

module.exports = connectDB;
