import Orders from "../Models/Order.js"
import User from "../Models/User.js";


//for the COD orders
const CODorders=async(req,res)=>{
    try {
const {userId,address,amount,items}=req.body

// const date = new Date(Date.now());

const userData={
    userId,
    address,
    amount,
    items,
    paymentMethod:"COD",
    payment:false,
    date:Date.now()
}
const newOrder=new Orders(userData);
await newOrder.save();
await User.findByIdAndUpdate(userId,{cartData:{}})
res.status(200).json({success:true,message:"Cash on delivery order"})
  
    } catch (error) {
      res.status(500).json({success:false,message:"server error "})  
    }
}
//for the  stripe payment gateway
const StripePayment=async(req,res)=>{

}
//for the  razorpay payment gateway
const razorpayPayment=async(res,req)=>{

}

//for all the orders on Admin panel
const Allorders = async (req, res) => {
    try {
      const orders = await Orders.find({});
      res.status(200).json({ success: true, orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  

//user total orers
const singleOrder = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const cartUser = await Orders.find({ userId });

        res.status(200).json({ success: true, message: "Total orders", cartUser });
    } catch (error) {
        console.error("Server error:", error); // Improved error logging
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};


//for the orderStatus
const orderStatus=async(req,res)=>{
    try {
const {_id, status}=req.body
const updated=await Orders.findByIdAndUpdate(_id,{status:status});
if(!updated){
    res.json({message:"orders not Found"})

}
res.json({success:true,message:"status updated sucessfully"})
  
    } catch (error) {
       res.json({message:"something went Wrong"}) 
    }

}
 export {CODorders,StripePayment,razorpayPayment,Allorders,singleOrder,orderStatus}

