import React, { useContext,useState,useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ShopProvider, { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import ProductItem from '../Components/ProductItem';

const Product = () => {
const {id}=useParams();

const {product,currency,addtoCart,token,Navigate}=useContext(ShopContext);
const [singleProduct, setsingleProduct] = useState(null)
const [image, setimage] = useState('')
const [sizes,setSizes]=useState('')
// console.log(id)
const fetchProducts=async()=>{
  product.map((item)=>{
    if(item._id===id){
      setsingleProduct(item)
setimage(item.image[0])
      return null;
    }
  })
  
}
useEffect(() => {
  fetchProducts();
}, [id,product])

useEffect(() => {
  if (singleProduct) {
    console.log("Single product updated:", singleProduct);
  }
}, [singleProduct]);





  return (
    product?
    <div className=' flex flex-col '>
       <div className=' flex flex-col sm:flex-row max-w-screen-xl gap-16   my-8'>
  {/* products */}
   <div className='flex flex-col-reverse sm:flex-row gap-4 sm:gap-0'>
    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between 
   w-full sm:w-[25%] '>
    {singleProduct?.image?.map((item, index) => (
            <img onClick={(()=>setimage(item))}  className='w-[30%] sm:w-[88%] shrink-0 sm:mb-4  ' key={index} src={item} alt="" />
          ))}
      
    </div>
    <div className='w-full sm:w-[50]'>
      <img src={image} alt="image" />
      </div>


   </div>
   <div className='flex flex-col sm:w-full space-y-4'>
  <h1 className='font-semibold text-2xl'>{singleProduct?.name}</h1>
  <div className='flex gap-2 '>
    <img src={assets.star_icon}  alt="" />
    <img src={assets.star_icon} alt="" />

    <img src={assets.star_icon} alt="" />
    <img src={assets.star_icon} alt="" />
    <img src={assets.star_dull_icon} alt="" />
<p className=''>(122)</p>
  </div>
  <h1 className='font-semibold text-2xl'>{currency}{singleProduct?.price}</h1>
<p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
<p className='font-semibold text-lg'>Select size</p>
<div className='flex gap-2'>
{
  singleProduct?.sizes?.map((size,index)=>(
    <p className='px-3 py-2 font-semibold text-lg bg-gray-200 cursor-pointer' onClick={()=>setSizes(size)}key={index}>{size}</p>
  ))
}
</div>

<button className='text-white bg-black p-4 sm:w-1/4 hover:bg-gray-500 duration-300  ' onClick={()=>token?addtoCart(singleProduct?._id,sizes,token):Navigate("/Login")}>ADD TO CART</button>


   </div>




  </div>
  <div className='flex flex-col py-8 space-y-8 justify-center '>
  <Title text1={"Related"} text2={"Products"}/>
  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
    {
      product
      ?.filter((product) => product.category === singleProduct?.category  && singleProduct?.subCategory) // Filter by category
      .slice(0, 4) // Limit to first 3 items
      .map((item, index) =>(
        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
      ))
    }
  </div>
  </div>
    </div>
   :<div className='opacity-0'></div>
  )
}

export default Product
