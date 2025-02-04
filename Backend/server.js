import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './Config/mongo.js'
import cloudinaryConnect from './Config/Cloudinary.js'
import { UserRouter } from './routes/UserRoutes.js'

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

app.get('/',(req,res)=>{
    res.send("API is Working")
})
app.listen(port,()=>console.log('server started on port '+port))