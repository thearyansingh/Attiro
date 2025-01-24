import React, { useState } from 'react'
import Title from '../Components/Title'
import TotalAmount from '../Components/TotalAmount'
import { useContext } from 'react'
import { ShopContext } from "../Context/ShopContext";
import { useForm } from "react-hook-form";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const PlaceOrder = () => {
  const [method,setMethod]=useState('');
  const {
  
      currency,
      grandTotal,
      totalcart,
      deliveryprice,
    } = useContext(ShopContext)

    const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit=((data)=>{
    console.log(data)
    reset();
  
  })
  return (
    <div className='p-2'>
      <div className='flex justify-start'>
      <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col sm:flex-row '>
           {/* delivery Information */}
      <div  className="w-full sm:w-1/2 flex flex-col gap-4 py-6">

<div  className="flex  gap-3">
  <input
  {...register("FirstName")}
    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
    placeholder="First Name"
  />
  <input
  {...register("LastName")}
    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
    placeholder="Last Name"
  />
</div>

<input
{...register("Email")}
  type="email"
  className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
  placeholder="Email Address"
/>


<input
{...register("Street")}
  type="text"
  className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
  placeholder="Street"
/>


<div className="flex gap-3 ">
  <input
  {...register("City")}
    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-mdw-1/2"
    placeholder="City"
  />
  <input
  {...register("State")}
    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
    placeholder="State"
  />
</div>

<div className="flex  gap-3 ">
  <input
  {...register("ZipCode")}
    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
    placeholder="Zipcode"
  />
  <input
    {...register("Country")}


    type="text"
    className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
    placeholder="Country"
  />
</div>


<input
  {...register("Phone")}

  type="text"
  className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
  placeholder="Phone"
/>
{errors.exampleRequired && <span>This field is required</span>}
</div>

<div className='w-full flex flex-col items-end gap-4 py-6 '>
<TotalAmount currency={currency} subTotal={totalcart} shippingFee={deliveryprice} Total={grandTotal} />
<Title text1={"PAYMENT"} text2={"METHOD"}/>

<div className='flex justify-start gap-2 '>
  <div onClick={(()=>setMethod('Stripe'))} className='flex gap-2 px-4  items-center border-[2px]'>
    <p className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${method==='Stripe'?'bg-green-500':''}`}></p>
  <img  src={assets.stripe_logo} className='w-16 h-7 cursor-pointer' alt="" />
  </div>
  <div className='flex gap-2 px-4 py-2 border-[2px] items-center' onClick={(()=>setMethod('Razorpay'))}>
  <p className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${method==='Razorpay'?'bg-green-500':''}`}></p>

  <img  src={assets.razorpay_logo} className='w-16 h-5 cursor-pointer' alt="" />
    
  </div>
  <div onClick={(()=>setMethod('COD'))} className='flex gap-2 px-4 py-2 border-[2px] items-center' >
  <p className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${method==='COD'?'bg-green-500':''}`}></p>

  <p className='font-semibold text-gray-600  cursor-pointer'>Cash On Delivery</p>

  </div>

</div>
<Link to='/MyOrder' type='submit'  className="w-1/3 text-[10px] sm:text-sm   px-2 py-2 bg-black text-white">
        PROCEED TO CHECKOUT
      </Link>

    </div>

      </form>
   
    {/* cart total */}
   
    </div>
  )
}

export default PlaceOrder
