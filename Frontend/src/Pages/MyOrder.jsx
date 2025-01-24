import React, { useContext } from 'react'
import Title from '../Components/Title'
import { ShopContext } from '../Context/ShopContext'

const MyOrder = () => {
  const{products,currency}=useContext(ShopContext);
  return (
    <div className=''>
      <div className='flex justify-start py-4'>
      <Title text1={"YOUR"}text2={'NAME'}/>

      </div>
      <div >
{
  products?.slice(0,4).map((item,index)=>(
    <div
                key={index}
                className="py-4 border-b-2 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[3fr_1.5fr_0.5fr] gap-4 items-center"
              >
                {/* Product Details */}
                <div className="flex justify-start gap-4 items-center">
                  <img
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                    src={item?.image[0]}
                    alt="product"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base font-medium">
                      {item?.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm sm:text-base">
                        {currency}
                        {item?.price}
                      </p>
                      <p className="w-12 text-center font-semibold text-sm sm:text-base bg-gray-200 p-1">
                        XL
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-medium">
                    23 feb 2025
                    </p>
                  </div>
                </div>
  
                {/* Quantity Input */}
              <div className= 'flex gap-2 items-center'>
                <p className='w-3 h-3 rounded-full bg-green-500'></p>
                <p>Delivered</p>
              </div>
  
                {/* Delete Icon */}
                <p className=' px-3 py-1 border-[2px] font-semibold border-gray-400'>
                 Track Order
                </p>
              </div>
  ))
}
      </div>
      
    </div>
  )
}

export default MyOrder
