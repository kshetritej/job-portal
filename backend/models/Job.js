const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Add a title!"],
  },
  description: {
    type: String,
    required: [true, "Add a description!"],
  },
  location: {
    type: String,
    required: [true, "Add a location!"],
  },
  salary: {
    type: String,
    required: [true, "Add a salary!"],
  },
  employmentType: {
    type: String,
    required: [true, "Add an employment type!"],
  },
  employer: {
    type: String,
    required: [true, "Add an employer!"],
  }
});


module.exports = mongoose.model("Job", JobSchema);
