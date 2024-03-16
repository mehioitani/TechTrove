import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Protect Routes
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // jwt (like it is mentioned in the controller 'jwt')
  token = req.cookies.jwt;

  if (token) {
    // decode the token to get the user id (extract it)
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //   add it to the request object
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Admin middleware
const admin = asyncHandler((req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
});

export { protect, admin };
