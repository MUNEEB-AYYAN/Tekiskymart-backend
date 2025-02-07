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
    city: { 
        type: String,
        required: true,
        unique: true,
        match: ['Please enter a valid email address'],
    }

});

let orderModel=mongoose.model('order', orderSchema);
export default orderModel