import React from 'react'
import Title from '../Components/Title'
import TotalAmount from '../Components/TotalAmount'
import { useContext } from 'react'
import { ShopContext } from "../Context/ShopContext";
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
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
<button type='submit'  className="w-1/3 text-[10px] sm:text-sm   px-2 py-2 bg-black text-white">
        PROCEED TO CHECKOUT
      </button>

    </div>

      </form>
   
    {/* cart total */}
   
    </div>
  )
}

export default PlaceOrder
