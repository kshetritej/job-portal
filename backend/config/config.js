const dotenv = require("dotenv")

dotenv.config();

const envConfig = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 8080
};

module.exports = {envConfig}
