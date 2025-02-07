import React from 'react'
import Attiro from '../assets/Attiro.png'
const Navbar = ({setToken}) => {
  return (

       <div>
      <div className=' px-6 py-2 sm:px-24 pb-2 flex justify-between items-center'>
<img src={Attiro} className='h-16 max-w-28' alt="" />
<button onClick={()=>setToken('')} className='px-8 py-2 cursor-pointer text-sm bg-gray-600  text-white rounded-full'>Logout</button>

   </div>
   <hr className=' border-none h-[1px]  bg-gray-200 ' />
    </div>
   
  )
}

export default Navbar
