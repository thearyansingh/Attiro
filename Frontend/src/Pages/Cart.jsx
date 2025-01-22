import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
const{products,currency,CartItem,getUpdate}=useContext(ShopContext);
const [cartData,SetCartdata]=useState([])
useEffect(() => {
 let tempData=[];
 for(const items in CartItem){   // for the item present in cart 
  for(const item in CartItem[items]){  // for the size present in cart
  if(CartItem[items][item]>0){
    tempData.push({
      _id:items,
      size:item,
      quantity:CartItem[items][item]
    })
  }
  }
 }
 SetCartdata(tempData);

 
}, [CartItem])

  return (
   <div className=''>
    <div className='flex justify-start'>
   <Title  text1={"Your"} text2={"Cart"}/>
   </div>
   <div >
    {
      cartData.map((item,index)=>{
const addedProduct=products.find((product)=>product._id===item._id)
        return(
<div key={index} className='py-4 border-t-2 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center  '>
  <div className='flex justify-start gap-4'>
  <img className='w-15 sm:w-20' src={addedProduct?.image[0]} alt="image" />
<div className='flex flex-col gap-4'>
<p>{addedProduct?.name}</p>
<div className='flex gap-4 items-center'>
<p>{currency}{addedProduct?.price}</p>
<p className=' w-1/4 text-center font-semibold text-lg bg-gray-200 cursor-pointer'>{item.quantity}</p>

</div>

</div>
  </div>

  <input className='w-10' type="number" min={1} onChange={((e)=>e.target.value===''||e.target.value===0?null:getUpdate(item._id,item.size,Number(e.target.value)))} defaultValue={item.quantity}/>

<img onClick={(()=>getUpdate(item._id,item.size,0))} className='w-7' src={assets.bin_icon} alt="" />

</div>
        )
      })
    }

   </div>
 


   </div>

    
 
  )
}

export default Cart
