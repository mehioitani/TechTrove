import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  // deleteTechProduct,
  // createTechProduct,
  // updateTechProduct,
  // createProductReview,
  // getTopProducts,
} from "../controller/productController.js";
// import {  ,    } from '../middleware/authMiddleware.js'

router.route("/products").get(getProducts);
// .post(createTechProduct);
// router.route("techProduct/:id/reviews").post(createProductReview);
// router.get("/top", getTopProducts);
router.route("/products/:id").get(getProductById);
// .delete(deleteTechProduct)
// .put(updateTechProduct);

export default router;
