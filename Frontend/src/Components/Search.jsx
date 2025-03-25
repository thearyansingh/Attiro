import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
const location=useLocation();
const [visible, setvisible] = useState(false)
useEffect(() => {
if(location.pathname.includes('/Collection'))
    setvisible(true);
else
setvisible(false); 
}, [location])

  return showSearch&&visible?(
    <div className=' py-1  '>
      <div className='flex  justify-center items-center py-6 gap-4 '>
        <div className='flex '>
        <input type="text" value={search} placeholder='search' onChange={(e)=>setSearch(e.target.value)} className=' w-full  outline-none rounded-xl border-[3px] px-4 py-1 text-lg ' />
    
        </div>

<img onClick={()=>setShowSearch(false)} className='cursor-pointer w-5' src={assets.cross_icon}  alt="" />
      </div>
    </div>
  ):null
}

export default Search
