const express = require("express");
const protect = require("../middleware/auth.middleware");
const {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.post("/", protect, addTask);
router.get("/:projectId", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
