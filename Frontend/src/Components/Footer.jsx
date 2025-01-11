import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white py-16 ">
      <div className=" mx-auto border-t-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-24 py-4 ">
          {/* Logo and Description */}
          <div className="">
         <img className="h-[100px] w-[100px]" src={assets.Attiro} alt="Logo" />
            <p className="text-gray-600 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">COMPANY</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">About us</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Delivery</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy policy</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">GET IN TOUCH</h3>
            <div className="space-y-2">
              <p className="text-gray-600">+1-212-456-7890</p>
              <p className="text-gray-600">aryansinghdev@gmail.com</p>
            </div>
          </div>
        
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t-2 border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Copyright 2024 © aryansingh.dev - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
