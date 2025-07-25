import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      
      maxlength: 60,
    },
    desc: {
      type: String,
     
      maxlength: 200,
    },
    img: {
      type: String,
      
    },
    prices: {
      type: [Number],
     
    },
    extraOptions: {
      type: [
        {
          text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
