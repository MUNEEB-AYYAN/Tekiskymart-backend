 import express from "express"
 let preorderRoute = express.Router()
 import {preordercontoller} from "../controllers/preorderController.js"

 preorderRoute.post('/preorder',preordercontoller)

 export  default preorderRoute