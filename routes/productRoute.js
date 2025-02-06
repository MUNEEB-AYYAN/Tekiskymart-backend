import express from 'express';
import { createProduct } from '../controllers/productController.js';
let productRoute = express.Router()

productRoute.post('/create', createProduct);

export default productRoute