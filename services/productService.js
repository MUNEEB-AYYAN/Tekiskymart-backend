import Product from "../models/productModel.js";

// Create a new product
export const createProductServices = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product. Please try again.");
  }
};

// Get all products
export const getAllProductsServices = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again.");
  }
};

// Get product by ID
export const getOneProductServices = async (id) => {
  console.log(id, "Fetching Product by ID...");
  try {
    const product = await Product.findById(id);
    if (!product) { // FIXED
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error.message);
    throw new Error("Failed to fetch product. Please try again.");
  }
};

// Update product by ID
export const updateProductServices = async (productId, productData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });
    if (!updatedProduct) { // FIXED
      throw new Error("Product not found or failed to update");
    }
    return updatedProduct;
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
    throw new Error("Failed to update product. Please try again.");
  }
};

// Delete product by ID
export const deleteProductServices = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) { // FIXED
      throw new Error("Product not found or failed to delete");
    }
    return deletedProduct;
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw new Error("Failed to delete product. Please try again.");
  }
};

// Get products by category
export const categoryServices = async (category) => {
  try {
    const products = await Product.find({ productCategory: category }); // FIXED
    return products; // FIXED
  } catch (error) {
    console.error(`Error occurred while finding category: ${error.message}`);
    throw new Error("Failed to fetch category products. Please try again.");
  }
};
