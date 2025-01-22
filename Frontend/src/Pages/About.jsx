import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="py-8 text-center text-3xl">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex flex-col sm:flex-row gap-24">
        <div className="w-full justify-center items-center sm:w-[400px]">
          <img src={assets.about_img} alt="" />
        </div>
        <div className=" flex flex-col w-full sm:w-1/2  gap-6 justify-center  ">
          <p className="font-normal text-gray-500 ">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes
          </p>
          <p className="font-normal text-gray-500 ">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-semibold text-slate-500  ">Our Mission</p>
          <p className="font-normal text-gray-500  ">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond
          </p>
        </div>
      </div>

      <div className="pt-16 flex justify-start ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 justify-center items-center border border-gray-300 border-[2x]">
        <div className="flex flex-col justify-center gap-4 p-16 border-r-2">
          <p className="font-semibold text-slate-500 ">Quality Assurance:</p>
          <p className="text-gray-500 w-[316px]" > We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="flex flex-col justify-center  gap-4 p-16 border-r-2">
          <p className="font-semibold text-slate-500 ">Quality Assurance:</p>
          <p className="text-gray-500 w-[316px]" > We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="flex flex-col justify-center  gap-4 p-16 border-r-2">
          <p className="font-semibold text-slate-500 ">Quality Assurance:</p>
          <p className="text-gray-500 w-[316px]" > We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
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
  );
};

export default About;
