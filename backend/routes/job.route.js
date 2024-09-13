const JobRouter = require("express").Router();
const {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
} = require("../controllers/job.controller");

JobRouter.route("/").get(getAllJobs).post(createJob);
JobRouter.route("/:id").get(getJobById).put(updateJob).delete(deleteJob);

module.exports = JobRouter;

