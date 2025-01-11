import React from 'react'

const LetterBox = () => {
  return (
    <div className='flex flex-col sm:gap-6 gap-4 m-auto my-16 items-center justify-center'>
       <p className='font-semibold text-black text-base sm:text-lg'>Subscribe now & get 20% off</p>
       <p className=' text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       <div className='flex  items-center justify-center'>
     <input type="email"  className='border border-gray-400 rounded-sm py-4 px-6'      placeholder='Enter Your email id' />
     <button className='text-white bg-black p-4  '>SUBSCRIBE</button>
       </div>
    </div>
  )
}

export default LetterBox
