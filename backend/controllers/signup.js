const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/asyncHandler");
const { sendTokenResponse } = require("../utils/sendTokenResponse");

const signup = asyncHandler(async (req, res, next) => {
    const {email, username, password} = req.body
    if (!email || !username || !password) {
      return res.status(400).json({success: false, message:"Fill all fields!"})
    }
  
    const userExist = await User.findOne({
      email,
    });
  
    if(userExist) {
      return res.status(400).json({
      success:false,
      message: "User exists!"
      });}

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hash,
    });
    sendTokenResponse(user, 200, res);
  });
  
module.exports = { signup }  
