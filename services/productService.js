import Product from '../models/productModel.js';

// Create a new product
export const createProductServices = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// Get all products
export const getAllProductsServices = async () => {
  return await Product.find();
};

// Get product by ID
export const getOneProductServices = async (productId) => {
  return await Product.findById(productId);
};

// Update product by ID
export const updateProductServices = async (productId, productData) => {
  return await Product.findByIdAndUpdate(productId, productData, { new: true });
};

// Delete product by ID
export const deleteProductServices = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};