import { createProductServices, deleteProductServices, getAllProductsServices, getOneProductServices, updateProductServices } from "../services/productService.js";

export const createProduct = async (req, res) => {
  try {
    const product = await createProductServices(req.body);
    res.status(201).json({
        success: true,
        message: "product created successfully",
        product: product
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: "error while creating product",
        error: err.message
    });
  }
};

// Get all products
export const getAllProduct = async (req, res) => {
  try {
    const products = await getAllProductsServices();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err });
  }
};

// Get product by ID
export const getOneProduct = async (req, res) => {
  try {
    const product = await getOneProductServices(req.params.id);
    if (product) {
      res.status(200).json(product);

    }
    else{
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.log(`error occured at get one product controller ${err.message}`);
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await updateProductServices(req.params.id, req.body);
    console.log(req.params.id)
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    }else{
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.log(`error occured at update product controller ${err.message}`)
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await deleteProductServices(req.params.id);
    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted' });
    }else{
      res.status(404).json({ message: 'Product not found' });
    }
    
  } catch (err) {
    console.log(`error occurred at delete product controller ${err.message}`);

  }
};

