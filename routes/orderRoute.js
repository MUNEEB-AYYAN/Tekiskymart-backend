import express from "express"
import {orderController} from "../controllers/orderController.js"


let orderRouter=express.Router()


orderRouter.post('/order',orderController)



export default orderRouter
