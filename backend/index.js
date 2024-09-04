const dotenv = require("dotenv");
const colors = require("colors");
const express = require("express")
const connectToDB = require("./config/connectToDb");
const path = require("path");
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 6000;

require("dotenv").config();
dotenv.config({ path: "./config/config.env" });
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`.cyan.bold);
  });
})

const app = express();
app.use(express.json());
app.use("/", routes);
