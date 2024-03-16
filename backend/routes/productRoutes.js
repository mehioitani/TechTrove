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

router.get("/products",getProducts)
// .post(createTechProduct);
// router.route("techProduct/:id/reviews").post(createProductReview);
// router.get("/top", getTopProducts);
router.get("/products/:id",getProductById)
// .delete(deleteTechProduct)
// .put(updateTechProduct);

export default router;
