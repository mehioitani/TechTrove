import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/").get(getProducts).post( createProduct);
router.get("/top", getTopProducts);
router.route("/:id/reviews").post( createProductReview);
// router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put( updateProduct)
  .delete( deleteProduct);

export default router;
