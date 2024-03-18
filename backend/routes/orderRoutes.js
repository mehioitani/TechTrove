import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controller/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router
  .route("/orders")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);

router.route("/orders/mine").get(protect, getMyOrders);
router.route("/orders/:id").get(protect, admin, getOrderById);
router.route("/orders/:id/pay").put(protect, updateOrderToPaid);
router.route("/orders/:id/deliver").put(protect, admin, updateOrderToDelivered);
export default router;
