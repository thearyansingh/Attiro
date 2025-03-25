import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify';
const MyOrder = () => {
  const{product,currency,token}=useContext(ShopContext);
  const [orders,setOrders]=useState([]);

const order=async()=>{
  console.log("Token from context:", token);
  try {
    if(token)
 console.log(token)
    const response=await axios.get("http://localhost:4000/api/Orders/userOrder", { headers: { Authorization: token } });
   console.log(response)
    if(response.data.success){
      let allordes=[];
      response.data.cartUser.map((orderdata)=>{
        orderdata.items.map((item)=>{
item["status"]=orderdata.status
item["paymentMethod"]=orderdata.paymentMethod
item["payment"]=orderdata.payment

item["date"]=orderdata.date
allordes.push(item);
setOrders(allordes)

})
      })
    }
  

  } catch (error) {
    toast.error(error)
  }

}

useEffect(()=>{
order()
},[token])

console.log(orders);


  return (
    <div className=''>
      <div className='flex justify-start py-4'>
      <Title text1={"YOUR"}text2={'NAME'}/>

      </div>
      <div >
{
  orders?.map((item,index)=>(
    <div
                key={index}
                className="py-4 border-b-2 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[3fr_1.5fr_0.5fr] gap-4 items-center"
              >
                
                <div className="flex justify-start gap-4 items-center">
                  <img
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                    src={item?.image[0]}
                    alt="product"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base font-medium">
                      {item?.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm sm:text-base">
                        {currency}
                        {item?.price}
                      </p>
                      <p className="w-12 text-center font-semibold text-sm sm:text-base bg-gray-200 p-1">
                      {item.quantity}
                      </p>
                      <p className="w-12 text-center font-semibold text-sm sm:text-base bg-gray-200 p-1">
                      {item.size}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-medium">
                    {item.date}
                    </p>
                  </div>
                </div>
  
           
              <div className= 'flex gap-2 items-center'>
                <p className='w-3 h-3 rounded-full bg-green-500'></p>
                <p>{item.status}</p>
              </div>
  
                <p className=' px-3 py-1 border-[2px] font-semibold border-gray-400'>
                 Track Order
                </p>
              </div>
  ))
}
      </div>
      
    </div>
  )
}

export default MyOrder
