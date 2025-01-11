import React from 'react'
import Hero from '../Home/Hero'
import Collection from './Collection'
import HomeCollection from '../Home/HomeCollection'
import BestSeller from '../Home/BestSeller'
import Policy from '../Home/Policy'
import LetterBox from '../Home/LetterBox'

const Home = () => {
  return (
    <>
     <Hero/> 
    <HomeCollection/>
    <BestSeller/>
    <Policy/>
    <LetterBox/>
    </>
  )
}

export default Home
