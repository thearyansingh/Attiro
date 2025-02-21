import React, { useEffect, useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Addproduct from './Pages/Addproduct';
import List from './Pages/List';
import Orders from './Pages/Orders';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
export  const backendURL=import.meta.env.BACKEND_URL

const App = () => {
  const [token,funToken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
  useEffect(()=>{
localStorage.setItem("token",token)
  },[token])
  
  
  return (
    <div className='bg-gray-50 min-h-screen'>
      {

token===""?<Login setToken={funToken}/>:(<>
 <Navbar setToken={funToken}/>
  <div className='flex w-full'>
  <Sidebar/>
   <div className='mx-auto my-8 w-[70%]'>
   <Routes>
   <Route path="/" element={<Addproduct setToken={token}/>} />
   <Route path="/ListProducts" element={<List Token={token}/>} />
   <Route path="/Orders" element={<Orders />} />
 </Routes>
   </div>

  </div>
</>
 
)
      }
  

  </div >
  )
}

export default App
