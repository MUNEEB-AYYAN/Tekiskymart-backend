import express from "express"

let orderRouter=express.Router()
import {orderController} from "../controllers/orderController.js"


orderRouter.post('/order',orderController)



export default orderRouter
