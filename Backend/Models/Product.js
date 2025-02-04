import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
        type: Array,
        required: true,
      }, 
      subCategory:{
        type:String,
        required:true,
      },
    category:{
        type:String,
        required:true,
      },
      size: {
        type: Array,
        required: true,
      },
      bestSeller:{
     type:Boolean
      },
    Date:{
        type:Number,
        required:true
    }
  },
  { timestamps: true }
);

const productModel =mongoose.model.product||mongoose.model('Product', productSchema);

export default productModel;