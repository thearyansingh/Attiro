import React from 'react'
import hero from "../assets/hero.jpg"
const Hero = () => {
  return (
    <>
<div className='flex flex-col sm:flex-row justify-center border border-gray-400'>
  {/* left side  */}
  <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
  <div className='text-[#414141] space-y-2' >
    <div className='flex items-center gap-1'>
      <hr className='w-8 sm:w-10  h-[2px]  bg-[#414141]' />
      <p className='font-medium text-sm sm:text-base '>OUR BEST SELLER</p>
    </div>
    <h1 className='font-semibold text-5xl prata-regular' >Latest Arrival</h1>
    <div className='flex items-center gap-1'>
     
      <p className='font-medium text-sm sm:text-base '>Shop Now</p>
      <hr className='w-8 sm:w-10  h-[2px]  bg-[#414141]' />
    </div>
  </div>
  </div>
  <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
  
<img src={hero} alt="" />

</div>
</div>


    </>
  )
}

export default Hero
