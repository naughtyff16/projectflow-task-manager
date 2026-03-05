const Project = require("../models/Project");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../middleware/asyncHandler");

exports.createProject = asyncHandler(async (req, res, next) => {
  const { projectName, description } = req.body;

  if (!projectName) {
    return next(new ApiError(400, "Project name is required"));
  }

  const project = await Project.create({
    projectName,
    description,
    createdBy: req.user._id,
  });

  return res.status(201).json({
    success: true,
    data: project,
  });
});

exports.getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ createdBy: req.user._id });

  return res.json({
    success: true,
    count: projects.length,
    data: projects,
  });
});

exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }

  if (project.createdBy.toString() !== req.user._id.toString()) {
    return next(new ApiError(403, "Forbidden"));
  }

  Object.assign(project, req.body);
  await project.save();

  return res.json({
    success: true,
    data: project,
  });
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }

  if (project.createdBy.toString() !== req.user._id.toString()) {
    return next(new ApiError(403, "Forbidden"));
  }

  await project.deleteOne();

  return res.json({
    success: true,
    message: "Project deleted successfully",
  });
});
