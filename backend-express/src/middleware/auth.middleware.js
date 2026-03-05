const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : null;

    if (!token) {
      return next(new ApiError(401, "Not authorized"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return next(new ApiError(401, "User not found"));
    }

    req.user = user;
    return next();
  } catch (error) {
    return next(new ApiError(401, "Invalid token"));
  }
};

module.exports = protect;
