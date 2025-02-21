import React, { useContext,useState,useEffect } from 'react'
import Title from '../Components/Title'
import { ShopContext } from '../Context/ShopContext';
import ProductItem from '../Components/ProductItem';

const HomeCollection = () => {
  const {product}=useContext(ShopContext)
  const [latestProduct, setlatestProduct] = useState([]);

 

  console.log(product)
  
  
  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
        <Title text1={'OUR'} text2={'COLLECTION'} />
        <p className='w-3/4 font-medium m-auto text-gray-500 text-sm sm:text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laudantium suscipit vel itaque eos delectus!</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4'>
          {
            product?.slice(0,10).map((item)=>(
             <ProductItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}   />
            )
            )
          }
        </div>
    </div>
  )
}

export default HomeCollection
