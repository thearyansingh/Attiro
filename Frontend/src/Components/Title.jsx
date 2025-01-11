import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <>
  <div className='flex justify-center  items-center gap-1'>
  <p className='w-8 sm:w-10  h-[1.3px]  bg-[#414141]' />

        <p className='font-medium text-sm sm:text-lg text-gray-500'>{text1}</p><span className='font-semibold text-sm sm:text-xl text-gray-700'>{text2}</span>
        <p className='w-8 sm:w-10  h-[1.3px]  bg-[#414141]' />
      </div>
    </>
  )
}

export default Title
