import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  name: { type: String},
  mobile: { type: Number},
  whatsAppNumber: { type: Number},
  address: { type: String},

});

let orderModel=mongoose.model('order', orderSchema);
export default orderModel