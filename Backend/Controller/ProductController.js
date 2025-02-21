import productModel from "../Models/Product.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      subCategory,
      category,
      sizes,
      bestSeller,
      
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

  
    const newProduct = {
      name,
      description,
      price:Number(price),
      subCategory,
      category,
      sizes:JSON.parse(sizes),
      bestSeller:bestSeller==="true",
      date:Date.now(),
      image:imageUrl
    };
    
    console.log(newProduct);
    
   const Productdata=new productModel(newProduct)
   const saveProduct=await Productdata.save();
    res.status(200).json({message:"Product added",saveProduct});
  } catch (error) {
    res.status(500).json({ message: "product cannot be added" });
  }
};

const listProduct = async (req,res) => {
    try {
const allProduct=await productModel.find();
    res.status(200).json({message:"all products",allProduct})
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }



};

const singleProduct = async (req,res) => {
    try {
        const singleProduct=await productModel.findById(req.body.id);
            res.status(200).json({message:"single products",singleProduct})
            } catch (error) {
                res.status(500).json({message:"something went wrong"})
            }  
};

const removeProduct = async (req,res) => {
    try {
    
        const product=await productModel.findById(req.body.id);
        if(!product){
            res.json({success:false,message:"product not found"})
        }
        const DeleteProduct=await productModel.findByIdAndDelete(req.body.id);
            res.status(200).json({suceess:true,message:"Deleted products",DeleteProduct})
            } catch (error) {
                res.status(500).json({message:"something went wrong"})
            }  
};

export { addProduct, listProduct, singleProduct, removeProduct };
