import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='max-w-screen-xl space-x-4 my-8'>
      <div className='py-8 text-center text-3xl'>
        <Title text1={"CONTACT"} text2={'US'}/>
      </div>
      <div className='flex flex-col sm:flex-row gap-12 justify-center items-center'>
        <div className='w-full sm:w-[400px] overflow-auto'>
<img src={assets.contact_img} alt="contact" />
        </div>
        <div className='flex flex-col gap-6  w-full sm:w-1/2  '>
     <h1>OUR STORE</h1>
    <div>
<p  className='font-normal text-slate-500 '> 54709 Willms Station </p>
<p className='font-normal text-slate-500 '>Suite 350, Washington, USA</p>
    </div>
    <div>
<p className='font-normal text-slate-500 '>Tel: (415) 555‑0132</p>
<p className='font-normal text-slate-500 '>Email: aryandev@gmail.com</p>
    </div>
    <h1>CARRERS AT FOREVER</h1>
    <div className='flex flex-col gap-4'>
    <p className='font-normal text-slate-500 '>Learn more about our teams and job openings.</p>
        <button className='px-2 w-[150px] py-4 text-base border-[1px] border-black'>Enquiry Jobs</button>
     
    </div>
        
        </div>
        
      </div>

      <div className='flex flex-col sm:gap-6 gap-4 m-auto my-24 items-center text-center justify-center'>
       <p className='font-semibold text-black text-base sm:text-lg'>Subscribe now & get 20% off</p>
       <p className=' text-gray-500  text-sm sm:text-base md:text-lg lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       <div className='flex items-center justify-center'>
     <input type="email"  className='border w-1/2 sm:w-[400px]  border-gray-400 rounded-sm py-4 px-6'      placeholder='Enter Your email id' />
     <button className='text-white bg-black p-4  '>SUBSCRIBE</button>
       </div>
    </div>
    </div>
  )
}

export default Contact
