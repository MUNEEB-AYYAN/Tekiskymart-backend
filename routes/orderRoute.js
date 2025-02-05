import express from "express"

let orderRouter=express.Router()
import {orderController,orderAddress,ordermobile,ordercity} from "../controllers/orderController.js"


orderRouter.get('/order',orderController)
orderRouter.post('/address/:area/:city/:pincode',orderAddress)
orderRouter.get('/mobile/',ordermobile)
orderRouter.get('/city/:state',ordercity)



export default orderRouter
