const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/asyncHandler");
const { sendTokenResponse } = require("../utils/sendTokenResponse");

const login = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(400).json({success: false,message: "Fill all the fields"})
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({success: false, message:"User not found!"})
  }

  const matchPasswords = await bcrypt.compare(password, user.password);

  if (!matchPasswords) {
    return res.status(400).json({success: false, message:"Incorrect password!"})
  }
  sendTokenResponse(user, 200, res);
});

module.exports = { login }
