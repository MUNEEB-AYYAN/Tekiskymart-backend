import express from "express"
import {allproductController,productbyid,updateproductcontroller,deleteproductcontroller} from "../controllers/productController"
let productRoute =express.Router()

productRoute.get('/allproduct',allproductController)
productRoute.post('/product/:id',productbyid)
productRoute.put("/updateproduct/:id",updateproductcontroller)                        // Update Product (Admin Only)
productRoute.delete("/deleteproduct/:id",deleteproductcontroller)                    // Delete Product (Admin Only)

                                                            
export default productRoute