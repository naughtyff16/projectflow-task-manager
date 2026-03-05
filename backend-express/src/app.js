require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.middleware");

connectDB();

const app = express();

/*
CORS CONFIG
*/
app.use(
  cors({
    origin: ["http://localhost:5173", "https://frontend-domain.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/tasks", require("./routes/task.routes"));

app.use(errorHandler);

module.exports = app;
