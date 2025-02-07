
import mongoose from "mongoose";

const preorderSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: true, 
    },
    mobile: {
        type: Number,  
        required: true,
    },
    quantity: { 
        type: Number, 
        required: true,
    },
    description: {
        type: String,
    }
});

const PreorderModel = mongoose.model('PreorderModel', preorderSchema);

export default PreorderModel;
