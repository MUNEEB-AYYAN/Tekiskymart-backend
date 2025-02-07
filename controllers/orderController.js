import { orderCreateServices } from "../services/orderService.js"

export let  orderController= async(req,res)=>{
    let {name,mobile,address,}=req.body
     console.log(`user ${name} mobile ${mobile}  address${address}`)
    try {
        
let ordercreate = await orderCreateServices(name,mobile,address,)
    if (ordercreate) {
        res.send(`ordercreate created succesfully! ${ordercreate}`)
    }else{
        res.send(`ordercreate not create`)
    }
    
   } catch (error) {
    console.log(`error occured at orderController ${error.message}`)
   }
}
   







