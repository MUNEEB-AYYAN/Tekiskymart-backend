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
    unique: true
  },
  city: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
        },
});

let orderModel = mongoose.model("order", orderSchema);
export default orderModel;
