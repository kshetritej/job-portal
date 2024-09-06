const Job = require("../models/Job");
const asyncHandler = require("../middlewares/asyncHandler");

const createJob = asyncHandler(async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
}
);

const getAllJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
});

const getJobById = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  res.status(200).json(job);
});

const updateJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return res.status(404).json({ success: false, message: "Job not found!" });
  }
  job.title = req.body.title || job.title;
  job.description = req.body.description || job.description;
  job.location = req.body.location || job.location;
  job.salary = req.body.salary || job.salary;
  job.employmentType = req.body.employmentType || job.employmentType;
  await job.save();
  res.status(200).json(job);
});

const deleteJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) {
    return res.status(404).json({ success: false, message: "Job not found!" });
  }
  res.status(200).json({ success: true, message: "Job deleted successfully!" });
});

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};