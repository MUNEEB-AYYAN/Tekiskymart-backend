import preorderModel from "../models/preorderModel.js";


export let preorderservices=async (name,mobile,quantity,description)=>{
   console.log(name,mobile,quantity,description)
   try {
      let preorder = await preorderModel({name,mobile,quantity,description});
      let preorderSave = preorder.save();
      return preorderSave
   } catch (error) {

      console.log(`error occured at preorderservices ${error.message}`)
      
   }
}

