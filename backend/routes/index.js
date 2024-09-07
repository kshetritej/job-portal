const express = require("express");
const router = express.Router();

const {login} = require("../controllers/login")
const {signup} = require("../controllers/signup")

router.route("/login").post(login);
router.route("/signup").post(signup);

module.exports = router;
