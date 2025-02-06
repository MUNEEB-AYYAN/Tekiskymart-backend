import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
  },
   name:{
    type: String,
    required: true,
    unique: true,
  
  }

});

let orderModel=mongoose.model('order', orderSchema);
export default orderModel