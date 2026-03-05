const Task = require("../models/Task");
const Project = require("../models/Project");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../middleware/asyncHandler");

/*
ADD TASK
*/
exports.addTask = asyncHandler(async (req, res, next) => {
  const { title, description, priority, dueDate, projectId } = req.body;

  if (!title || !projectId) {
    return next(new ApiError(400, "Title and projectId are required"));
  }

  const project = await Project.findById(projectId);

  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }

  if (project.createdBy.toString() !== req.user._id.toString()) {
    return next(new ApiError(403, "Forbidden"));
  }

  const task = await Task.create({
    title,
    description,
    priority,
    dueDate,
    projectId,
  });

  return res.status(201).json({
    success: true,
    data: task,
  });
});

// GET TASKS WITH PAGINATION + FILTER
exports.getTasks = asyncHandler(async (req, res) => {
  const { page = 1, limit = 5, status } = req.query;
  const { projectId } = req.params;

  const filter = { projectId };

  if (status) {
    filter.status = status;
  }

  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const tasks = await Task.find(filter)
    .sort({ createdAt: -1 })
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber);

  const total = await Task.countDocuments(filter);

  return res.json({
    success: true,
    data: tasks,
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  });
});

/*
UPDATE TASK
*/
exports.updateTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ApiError(404, "Task not found"));
  }

  const project = await Project.findById(task.projectId);

  if (project.createdBy.toString() !== req.user._id.toString()) {
    return next(new ApiError(403, "Forbidden"));
  }

  Object.assign(task, req.body);

  await task.save();

  return res.json({
    success: true,
    data: task,
  });
});

/*
DELETE TASK
*/
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ApiError(404, "Task not found"));
  }

  const project = await Project.findById(task.projectId);

  if (project.createdBy.toString() !== req.user._id.toString()) {
    return next(new ApiError(403, "Forbidden"));
  }

  await task.deleteOne();

  return res.json({
    success: true,
    message: "Task deleted successfully",
  });
});
