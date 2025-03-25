import express from "express"
import { createCart,getCart,updateCart } from "../Controller/CartController.js";
import cartAuth from "../Middleware/cart.js";
const cartroute=express.Router();
cartroute.post("/addCart",cartAuth,createCart)
cartroute.get("/getCart",cartAuth,getCart)
cartroute.post("/updateCart",cartAuth,updateCart);

export default cartroute;