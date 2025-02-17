import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct,categorycontroller } from '../controllers/productController.js';
let productRoute = express.Router()

productRoute.post('/create', createProduct);
productRoute.get('/getallproduct',getAllProduct);
productRoute.put('/updateproduct/:id',updateProduct);
productRoute.delete('/deleteproduct',deleteProduct);
productRoute.get('/getOneProduct/:id',getOneProduct)
productRoute.get('/category',categorycontroller)


export default productRoute