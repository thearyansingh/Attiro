import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required:true
    },
cartData:{
    type:Object,
    default:{}
}
  },
  { timestamps: true },
{minimize:false});  // minimize false is written because when the cart data is empty in the database so it will neflet the cartData 

const User =mongoose.model.User ||  mongoose.model('User', UserSchema);

export default User;