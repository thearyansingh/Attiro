import React, { useContext, useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import Attiro from "../assets/Attiro.png"
import {  Link, Links, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const {setToken,setCartItems,token}=useContext(ShopContext);
const {showSearch,setShowSearch,getcount}=useContext(ShopContext);
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Collection', to: '/Collection' },
    { name: 'About', to: '/About' },
    { name: 'Contact', to: '/Contact' },
    
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="top-0 left-0 z-50 bg-base pb-8  ">
      <div className=" max-w-7xl  mx-auto  lg:py-3 justify-between  border-b-2   ">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className=" flex items-center "> 
            <img className="h-28 w-32" loading='lazy' src={Attiro} alt="Logo" />
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navItems.map((item) => ( 
                <li key={item.name}>
                  <NavLink
                   to={item.to}
                    className="text-gray-700 px-3 py-2 items-center rounded-md text-md font-medium"
                  >
                    <p>{item.name}</p>
                    <hr className='w-3/4 border-none h-[1.6px]   bg-gray-500 hidden ' />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <Link to='/Collection' className="p-2 rounded-full text-gray-600">
              <span className="sr-only">Search</span>
              
              <FiSearch onClick={()=>setShowSearch(!showSearch)} className="h-6 w-6" />
            </Link>
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
          loading='lazy'
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/Login"  className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li> 
        <li>
          <Link to="/Myorder"  className="justify-between">
          Orders
           
          </Link>
        </li> 
       {(
         token? <li onClick={()=>{
          localStorage.removeItem('token')
          setToken("")
          setCartItems({})
          toast.success("Logged out")}}><a>Logout</a></li>:<></>
       )}
      </ul>
    </div>
    {
      (
      token? <Link to='/Cart' className="p-2 rounded-full relative text-gray-600">
          
      <FiShoppingCart className="h-8 w-8" />
      <p className='text-center absolute top-4 left-6 bg-black text-white rounded-full w-4 h-4 text-[10px]'>{getcount()}</p>
    </Link>:<></>  
      )
    }
           
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="flex-shrink-0 p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                <span className="sr-only">Search</span>
                <FiSearch onClick={()=>setShowSearch(!showSearch)} className="h-6 w-6" />
              </button>
              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                <Link to="/Login"  className="sr-only">Profile</Link>
                <FiUser className="h-6 w-6" />
              </button>
              <button className="ml-3 flex-shrink-0 p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                <span className="sr-only">Cart</span>
                <FiShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

