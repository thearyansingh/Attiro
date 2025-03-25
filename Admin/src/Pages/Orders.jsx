import {React,useEffect,useState} from 'react'
import { Attiro, parcel_icon } from '../assets/assets.js'
import axios, { getAdapter } from "axios"
import { toast } from 'react-toastify'






const Orders = () => {
  const [orders,setOrders]=useState([])
  


    const getAllOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/Orders/allOrder");
        setOrders(response.data.orders); // Store orders in state
       
      } catch (error) {
       
        toast.error(error.response?.data?.message || "Failed to fetch orders");
      }
    };
  
  

  // Api to update  the order status 
  const updateStatus=async(_id,status)=>{
try {
  const {data}= await axios.post("http://localhost:4000/api/Orders/status",
    {_id,
    status:status})
  if(data.success){
   
    toast.success("updated successfully")
    getAllOrders()
    console.log(data);
  }
} catch (error) {
  console.log(error)
  toast.error(error.data?.message || "Failed to update")
}
  }
  useEffect(()=>{
getAllOrders()
  },[])


  return (

    <div>
      <h1>Orders Page</h1>
<div className='my-8 space-y-3'>
  {
  orders.map((item)=>(
    <div index={item._id} className='  px-8 py-6 border-2 gap-3 border-gray-300 flex flex-col sm:flex-row  justify-between' >
    <img className='w-[50px] h-[50px]' src={parcel_icon} alt="" />
    <div className="flex flex-col gap-1 text-sm text-slate-500">
{
  item.items.map((data,index)=>(
    <p key={index}>{data.name} X {data.quantity}</p>
  ))
}

      <p>{item.address.firstName+" "+item.address.lastName} , {item.address.phone}</p>
<p> {item.address.street}</p>
     <p> {item.address.state}</p>
     

    </div>
<div className="flex flex-col ">
<p className="mb-3">Items:{item.items.length}</p>

  <p>Method:{item.paymentMethod}</p>
  <p>Payment:{item.status}</p>
</div>
    
 
 
    
  
    
    
    
      <p>Amount:{item.amount}</p>
      <select
                className=" max-h-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
         value={item.status}
           onChange={(event)=>updateStatus(item._id,event.target.value)}
             
              >
                <option value="">Ordered Placed</option>
                <option value="Packing">Packing</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
    
              </select>
            </div>
  ))
  }

  </div>
</div>
   
  )
}

export default Orders
