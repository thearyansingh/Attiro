import {v2 as cloudinary} from 'cloudinary'
 
const cloudinaryConnect=async()=>{

  console.log("Cloudinary Connect")

 cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
}
export default cloudinaryConnect;
