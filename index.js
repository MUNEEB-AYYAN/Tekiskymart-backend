import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"
import orderRouter from "./routes/orderRoute.js"
import cors from "cors"
import dbConnect from "./db/connection.js"

let app=express()
app.use(cors())
app.use(express.json())

dotenv.config()
let port=process.env.PORT 
dbConnect(process.env.DBURL,process.env.DBNAME)


app.use('/user',userRouter)
app.use('/allorder',orderRouter)
// app.use('/payment',orderRouter)


app.listen(port,()=>{
     console.log(`server started successfully at ${port} number` )
})