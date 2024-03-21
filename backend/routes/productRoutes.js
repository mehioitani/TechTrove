import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  // deleteTechProduct,
  createProduct,
  // updateTechProduct,
  // createProductReview,
  // getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/products").get(getProducts).post(protect, admin, createProduct);
// router.route("techProduct/:id/reviews").post(createProductReview);
// router.get("/top", getTopProducts);
router.get("/products/:id", getProductById);
// .delete(deleteTechProduct)
// .put(updateTechProduct);

export default router;
