import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct } from '../controllers/productController.js';
let productRoute = express.Router()

productRoute.post('/create', createProduct);
productRoute.get('/getallproduct',getAllProduct);
productRoute.put('/updateproduct/:id',updateProduct);
productRoute.delete('/deleteproduct',deleteProduct);
productRoute.get('/getOneProduct',getOneProduct)


export default productRoute