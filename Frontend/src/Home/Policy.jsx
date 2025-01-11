import React from 'react'
import { assets} from '../assets/assets'
const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-10 py-6 '>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <img src={assets.exchange_icon } alt="exchange" />
        <p className='font-semibold text-slate-600'>Easy Exchange Policy</p>
        <p className='font-medium text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <img src={assets.quality_icon }  alt="exchange" />
        <p className='font-semibold text-slate-600'>Easy Exchange Policy</p>
        <p className='font-medium text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <img src={assets.support_img } alt="exchange" />
        <p className='font-semibold text-slate-600'>Easy Exchange Policy</p>
        <p className='font-medium text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
    </div>
  )
}

export default Policy
