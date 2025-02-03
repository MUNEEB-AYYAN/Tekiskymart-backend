import userModel from "../models/userModel.js";


export const getUser=async(email)=>{
    try {
        let user= await userModel.findOne({email})
        console.log(`user is ${user}`);
        return user
    } catch (error) {
        console.log(`error occured in getUser function of services ${error}`);
    }
}

export let createUser=async(data)=>{
    try {
        let u1=new userModel(data)
        let result=await u1.save()
        return "success"
    } catch (error) {
        console.log(error);
        return "failure"
    }
}