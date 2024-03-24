import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  // getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/products").get(getProducts).post(protect, admin, createProduct);
router.route("/products/:id/reviews").post(createProductReview);
// router.get("/top", getTopProducts);
router
  .route("/products/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
