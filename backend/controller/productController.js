import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /techProduct
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET techProduct/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public

export {
  getProducts,
  getProductById,
  // deleteTechProduct,
  // createTechProduct,
  // updateTechProduct,
  // createProductReview,
  // getTopProducts,
};
