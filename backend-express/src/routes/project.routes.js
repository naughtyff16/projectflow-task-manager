const express = require("express");
const protect = require("../middleware/auth.middleware");
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

const router = express.Router();

router.route("/").post(protect, createProject).get(protect, getProjects);

router.route("/:id").put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
