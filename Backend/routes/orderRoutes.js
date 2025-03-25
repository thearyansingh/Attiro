import express from "express"
import {orderStatus,razorpayPayment,CODorders,StripePayment,Allorders,singleOrder} from "../Controller/OrderController.js";
import cartAuth from "../Middleware/cart.js";
import adminAuth from "../Middleware/Admin.js";


const orderRoute=express.Router();
//Admin features
orderRoute.post("/status" ,orderStatus);
orderRoute.get("/allOrder", Allorders);
//Order features
orderRoute.post("/cod",cartAuth,CODorders);
orderRoute.post("Stripe",cartAuth,StripePayment);
orderRoute.post("/razorpay",cartAuth,razorpayPayment);
//Admin features
orderRoute.get("/userOrder",cartAuth,singleOrder)


export default orderRoute;