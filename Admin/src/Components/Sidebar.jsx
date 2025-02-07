import React from 'react'
import { NavLink } from 'react-router-dom'
import { add_icon, order_icon } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border border-gray-200 border-r-2  ' >
      <div className='flex flex-col justify-center sm:pl-10 gap-6 pt-5'>
      <NavLink to='/' className='flex items-center border gap-2 rounded-lg rounded-r-none border-gray-200 border-r-0 px-4 py-2'>
      <img src={add_icon} className='w-6 h-6' alt="" />
<p className='hidden sm:block'>Add product</p>
      </NavLink>
      <NavLink to='/ListProducts' className='flex items-center rounded-lg rounded-r-none border border-gray-200 gap-2  border-r-0 px-4 py-2'>
      <img src={order_icon} className='w-6 h-6' alt="" />
<p className='hidden sm:block'>Add product</p>
      </NavLink>
      <NavLink to='/Orders' className='flex items-center rounded-lg rounded-r-none border border-gray-200 gap-2 border-r-0 px-4 py-2'>
      <img src={order_icon} className='w-6 h-6' alt="" />
<p className='hidden sm:block'>Add product</p>
      </NavLink>
      
      </div>
      
    </div>
  )
}

export default Sidebar
