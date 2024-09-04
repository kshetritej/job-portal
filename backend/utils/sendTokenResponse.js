const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getToken();
    const options = {
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      user,
      token,
      message: "Token Sent",
    });
  };

module.exports = { sendTokenResponse }
