import express from "express"
import {orderController} from "../controllers/orderController.js"


let orderRoute=express.Router()


orderRoute.post('/order',orderController)



export default orderRoute