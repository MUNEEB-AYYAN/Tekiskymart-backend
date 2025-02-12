import orderModel from "../models/orderModel.js";

export let orderCreateServices =async (name,mobile,address,whatsAppNumber) => {
    console.log(name,mobile,address,whatsAppNumber)
    try {
        let order = await orderModel({name,mobile,address,whatsAppNumber});
        let orderSave = order.save();
        return orderSave
    } catch (error) {
        console.log(`error occured at orderCreateServices ${error.message}`)
    }
}