import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    description: { type: String, required: true },

    price: { type: Number, required: true },

    quantity: { type: Number, required: true },

    images: { type: [String], require: true },

    productCategory: { type:[String] , required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
