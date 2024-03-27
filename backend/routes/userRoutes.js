import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controller/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/").post(registerUser).get(getUsers);

router.post("/logout", logoutUser);
router.post("/auth", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
export default router;
