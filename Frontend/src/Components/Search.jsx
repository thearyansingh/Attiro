import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search,setsearch,showSearch,setshowSearch}=useContext(ShopContext);
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
<input type="text" value={search} placeholder='search' onChange={(e)=>setsearch(e.target.value)} className=' sm:w-1/3 outline-none rounded-xl border-[3px] px-4 py-1 text-lg' />
<img src={assets.search_icon} alt=""  className='w-5'/>
<img onClick={()=>setshowSearch(false)} className='cursor-pointer w-5' src={assets.cross_icon}  alt="" />
      </div>
    </div>
  ):null
}

export default Search
