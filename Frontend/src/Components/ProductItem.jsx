import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,name,image,price}) => {
    const {currency}=useContext(ShopContext);


  return (
    <Link to={`/Product/${id}`} className='flex flex-col  gap-2 cursor-pointer'>
     <div className='overflow-hidden'>
        <img className="hover:scale-110 transition duration-300" src={image[0]} alt="" />
     </div>
     <p className='font-medium text-gray-500 text-sm'>{name}</p>
     <p className=' text-gray-500 text-lg'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
