const colors = require("colors");
const express = require("express");
const connectToDB = require("./config/connectToDb")
const {envConfig} = require("./config/config");
const routes = require("./routes/index.js");
const JobRouter = require("./routes/job.route.js");
const app = express();

app.use(express.json());
app.use("/api", routes);
app.use("/jobs", JobRouter)

connectToDB().then(() => {
  app.listen(envConfig.PORT, () => {
    console.log(`Server Running on Port ${envConfig.PORT}`.cyan.bold);
  });
})

