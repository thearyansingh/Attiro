import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
const BestSeller = () => {
    const responsive={
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const {product}=useContext(ShopContext);
    const [BestSell, setBestSeller] = useState([])
   
    useEffect(() => {
     const bestProduct=product.filter((item)=>(item.bestSeller))
      setBestSeller(bestProduct);
    }, [])
    // console.log(BestSell);
    console.log(product)
    
    
  return (
    <div className='my-10'>
  <div className='py-10 text-center text-3xl'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 font-medium m-auto text-gray-500 text-sm sm:text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laudantium suscipit vel itaque eos delectus!</p>
        </div>
        <div className='container px-5'>
        <Carousel 
         // Set auto swipe interval to 3 seconds
          autoPlay={true}
          autoPlaySpeed={2000} 
       
          infinite={true}
        responsive={responsive}>
       {
        BestSell.map((item)=>(
         <ProductItem index={item._id} id={item._id} name={item.name} image={item.image} price={item.price} /> 
        )

        )
       }
              </Carousel>

        </div>

      
    </div>
  )
}

export default BestSeller
