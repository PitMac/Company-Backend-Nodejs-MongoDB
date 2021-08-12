import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);

/*{
    "name" : "laptop Acer",
    "category": "laptops",
    "price" : 1010.0,
    "imageURL": "https://image.com"
}*/
