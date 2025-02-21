import React, { useEffect } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { Attiro } from '../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({Token}) => {
   const [Products, setProducts] = useState([])
console.log(Token);

const removeProduct = async (id) => {
  try {

    const { data } = await axios.delete("http://localhost:4000/api/product/removeProduct", {
      headers: { Authorization:Token }, 
      data: { id }, 
    });
    console.log(data);
    

    if (data.suceess) {
    setProducts((prev)=>prev.filter((item)=>item._id!==id))

      toast.success("Product deleted successfully!");
    }
  } catch (error) {
    console.error("Delete Error:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Failed to delete product");
  }
};

   useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/product/listProduct");
        console.log(response.data); // Log the API response
        setProducts(response.data.allProduct); // Assuming response contains { products: [...] }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts(); // Call the function inside useEffect
  }, []);
  const headings=["Name","Image","Category","Price","Actions"]
  return (
    <div>
     <div className='flex flex-col'>
      <p>All Product List</p>
    
      <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] px-3 py-1 mb-4 border-2 border-gray-300 bg-gray-300">  {
    headings.map((item,index)=>(
    <p key={index}>{item}</p>
    ))
  }
  </div>
  <div className='flex flex-col gap-3' >
  {
 Products.map((item,index)=>(
  <div key={index} className=" grid grid-cols-[2fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] px-3 py-2 items-center border-2 border-gray-300">
    
    <img src={item.image[0]} className=' w-12 h-15' alt="product_image" />
  <p>{item.name}</p>
  <p>{item.category}</p>
  <p>{item.price}</p>
  
  <MdDeleteForever className='w-8 h-8' onClick={()=>removeProduct(item._id)} />
    
  
  
 
  </div>

 ))
  }

  </div>
  

</div>


     </div>
    
  )
}

export default List
