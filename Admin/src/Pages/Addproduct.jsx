import React from 'react'
import { upload_area } from '../assets/assets'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
const Addproduct = ({setToken}) => {
  const [image1, setimage1] = useState(false)
  const [image2, setimage2] = useState(false)
  const [image3, setimage3] = useState(false)
  const [image4, setimage4] = useState(false)
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [category, setcategory] = useState("Men")
  const [subCategory, setsubcategory] = useState("Topwear")
  const [price, setprice] = useState("")
  const [size, setsize] = useState([])
  const [bestseller, setbestseller] = useState(false)
  console.log(size);
  console.log(name,description,category,subCategory,price,bestseller);
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      
      if (!setToken) {
        toast.error("Authentication failed. Please log in again.");
        return;
      }
      console.log(setToken);
      
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("bestSeller", bestseller);
      formData.append("sizes", JSON.stringify(size));
  
      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);
  
      const response = await axios.post(
        "http://localhost:4000/api/product/newProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: setToken, // Use token from props
          },
        }
      );
     
  
      toast.success("Product added successfully!");
      console.log(response.data);
  
    } catch (error) {
      console.log(error)
     setTimeout(() => {
      toast.error(error.response?.data?.message || "Failed to add product");
     }, 2000); 
    }
  };

  return (
    <div>
 <form  onSubmit={handleSubmit} className='flex flex-col space-y-4 '>
        <p className='text-black'>Upload Images</p>
        <div className='flex gap-4'>
        <label htmlFor='image1'>
       <img src={!image1?upload_area:URL.createObjectURL(image1)}  className='w-20 h-20 '  alt="" />
       <input type="file" onChange={(e)=>setimage1(e.target.files[0])}  id='image1' hidden />
        </label>
        <label htmlFor='image2'>
       <img src={!image2?upload_area:URL.createObjectURL(image2)}  className='w-20 h-20 '  alt="" />
       <input type="file"onChange={(e)=>setimage2(e.target.files[0])}  id='image2' hidden />

        </label>
        <label htmlFor='image3'>
       <img src={!image3?upload_area:URL.createObjectURL(image3)}  className='w-20 h-20 '  alt="" />
       <input type="file" onChange={(e)=>setimage3(e.target.files[0])}   id='image3' hidden />

        </label>
        <label htmlFor='image4'>
       <img src={!image4?upload_area:URL.createObjectURL(image4)}  className='w-20 h-20 '  alt="" />
       <input type="file" onChange={(e)=>setimage4(e.target.files[0])}   id='image4' hidden />

        </label>
        </div>
       <p >Product Name</p>
       <input type="text"onChange={(e)=>setname(e.target.value)} value={name} className='w-full sm:w-[50%]  py-2 pl-2 border-2 border-gray-300 rounded-lg hover:border-pink-300' placeholder='Type here' />
<p >Product Description</p>
<textarea onChange={(e)=>setdescription(e.target.value)} value={description} className='w-full sm:w-[50%] border-2 border-gray-300 rounded-lg' rows={2}   id=""></textarea>
<div className='flex  gap-16'>
  <div className='space-y-2'>
    <p>Product category</p>
    <select onChange={(e)=>setcategory(e.target.value)} className='px-4 py-2 border-2 border-gray-200 rounded-lg'  id="dropdown" name="dropdown">
    <option value="Mens">Mens</option>
    <option value="Womens">Womens</option>
    <option value="Kids">Kids</option>
</select>
  </div>
  <div className='space-y-2'>
    <p>Sub category</p>
    <select onChange={(e)=>setsubcategory(e.target.value)}  className='px-4 py-2 border-2 border-gray-200 rounded-lg'  id="dropdown" name="dropdown">
    <option value="Topwear">Topwear</option>
    <option value="Bottomwear">Bottomwear</option>
    <option value="Footwear">Footwear</option>
</select>
  </div>
  <div className='space-y-2'>
    <p >Product price</p>
    <input onChange={(e)=>setprice(e.target.value)} value={price} type="text" className='px-4 py-2 w-[30%] border-2 rounded-lg border-gray-300 ' />
  </div>
</div>
<p >Product Size</p>
<div className='flex gap-4 '>
 <p onClick={(e)=>setsize(prev=>prev.includes('S')?prev.filter(item=>item!=='S'):[...prev,'S'])} className={`px-4 py-2 bg-gray-200 text-gray-500 cursor-pointer ${size.includes('S')?"bg-pink-300 text-white":""} `}>S</p>
 <p onClick={(e)=>setsize(prev=>prev.includes('M')?prev.filter(item=>item!=='M'):[...prev,'M'])} className={`px-4 py-2 bg-gray-200 text-gray-500 cursor-pointer ${size.includes('M')?"bg-pink-300 text-white":""} `}>M</p>
 <p onClick={(e)=>setsize(prev=>prev.includes('L')?prev.filter(item=>item!=='L'):[...prev,'L'])} className={`px-4 py-2 bg-gray-200 text-gray-500 cursor-pointer ${size.includes('L')?"bg-pink-300 text-white":""} `}>L</p>
 <p onClick={(e)=>setsize(prev=>prev.includes('XL')?prev.filter(item=>item!=='XL'):[...prev,'XL'])} className={`px-4 py-2 bg-gray-200 text-gray-500 cursor-pointer ${size.includes('XL')?"bg-pink-300 text-white":""} `}>XL</p>
 <p onClick={(e)=>setsize(prev=>prev.includes('XXL')?prev.filter(item=>item!=='XXL'):[...prev,'XXL'])} className={`px-4 py-2 bg-gray-200 text-gray-500 cursor-pointer ${size.includes('XXL')?"bg-pink-300 text-white":""} `}>XXL</p>

</div>
<div className=' flex gap-2 item-center'>
  <input  type="checkbox" onChange={()=>setbestseller(prev=>!prev)} checked={bestseller} id='bestseller' />
  <label htmlFor="bestseller">Add to Bestseller</label>
</div>

<button onClick={(()=>{toast.success("Wait for Sometime",{autoClose:2000})})}  type='submit' className='px-2 py-2 w-[200px] text-lg font-semibold bg-black text-white'>Add Product</button>

        </form>
    </div>
   
  )
}

export default Addproduct
