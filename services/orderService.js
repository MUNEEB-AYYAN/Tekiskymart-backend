import orderModel from "../models/orderModel.js";

export let orderCreateServices =async (name,mobile,address) => {
    console.log(name,mobile,address)
    try {
        let order = await orderModel({name,mobile,address});
        let orderSave = order.save();
        return orderSave
    } catch (error) {
        console.log(`error occured at orderCreateServices ${error.message}`)
    }
}