import express from 'express'
import { addProduct,listProduct,singleProduct,removeProduct } from '../Controller/ProductController.js'
import upload from '../Middleware/multer.js';
 
const productRoute=express.Router();

productRoute.post("/newProduct",upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct)
productRoute.get("/listProduct",listProduct)
productRoute.get("/singleProduct",singleProduct)
productRoute.delete("/removeProduct",removeProduct)


export default productRoute;