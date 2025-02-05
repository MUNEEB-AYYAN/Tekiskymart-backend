import { comparePassword, hashPassword } from "../Authentication/bcrypt.js";
import { userCreateServices, userLoginServices } from "../services/userService.js";

export let register = async(req,res)=> {
    let {username,mobile,email,password}=req.body;
    console.log(`user ${username}, mobile${mobile},email ${email},password ${password}`)
   try {
    let hash = await hashPassword(password)
    console.log(hash)
    let userCreate = await userCreateServices(username,mobile,email,hash)
    if (userCreate) {
        res.send(`userCreate created succesfully! ${userCreate}`)
    }else{
        res.send(`userCreate not create`)
    }
    
   } catch (error) {
    console.log(`error occured at user ${error.message}`)
   }
}


export let userLogin=async(req,res)=>{
    let {email,password}=req.body;
    console.log(req.body);
   try {
    let dbPaassword = await userLoginServices(email)
    let log = await comparePassword(password,dbPaassword)
    console.log(log)
    if (log) {
        res.send(`user login succesfull!`)
    } else {
        res.send(`user login failed!`)
    }
   } catch (error) {
    console.log(`eerror occured at userlogin ${error.message}`)
   }
    
}

export let getProfile=(req,res)=>{
    res.send('succesfully')
    
}