import express from "express"
let app=express()
import dotenv from "dotenv"
import bodyParser from "body-parser"
import userRouter from "./routes/userRoute.js"
import orderRouter from "./routes/orderRoute.js"
import cors from "cors"
import dbConnect from "./db/connection.js"
import productRoute from "./routes/productRoute.js"



dotenv.config()
let port=process.env.PORT 

dbConnect(process.env.DBURL,process.env.DBNAME)


app.use(bodyParser.json());
app.use(express.json())


app.use(cors())
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/payment',orderRouter)
app.use('/product',productRoute)







app.listen(port,()=>{
     console.log(`server started successfully at ${port} number` )
})
