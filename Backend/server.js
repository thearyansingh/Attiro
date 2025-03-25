import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './Config/mongo.js'
import cloudinaryConnect from './Config/Cloudinary.js'
import { UserRouter } from './routes/UserRoutes.js'
import productRoute from './routes/ProductRoute.js'
import cartroute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoutes.js'

//App Config
const app=express()
const port=process.env.PORT || 4000
connectDb();
cloudinaryConnect()

//middleWares

app.use(express.json())
app.use(cors())


// api endpoints
app.use("/api/user",UserRouter);
app.use("/api/product",productRoute);
app.use("/api/cart",cartroute)
app.use("/api/Orders",orderRoute)



app.get('/',(req,res)=>{
    res.send("API is Working")
})
app.listen(port,()=>console.log('server started on port '+port))