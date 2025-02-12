import { orderCreateServices } from "../services/orderService.js"

export let  orderController= async(req,res)=>{
    let {name,mobile,address,whatsAppNumber,}=req.body
     console.log(`user ${name} mobile ${mobile}  address  ${address}   whatsapp  ${whatsAppNumber} `)
    try {
        
let ordercreate = await orderCreateServices(name,mobile,address,whatsAppNumber)
    if (ordercreate) {
    res.json({message:'user create succesfully' , status:200})
    }else{
        res.json({message:'user not succesfully' , status:200})
    }
    
   } catch (error) {
    console.log(`error occured at orderController ${error.message}`)
   }
}
   







