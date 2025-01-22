import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Collection from './Pages/Collection';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import MyOrder from './Pages/MyOrder';
import PlaceOrder from './Pages/PlaceOrder';
import SignUp from './Pages/SignUp';
import Product from './Pages/Product';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';
import { ToastContainer, toast } from 'react-toastify';

const AppRoutes = () => (
  <div className=' px-[5vw] sm:px-[6vw] md:px-[9vw]'>
    <ToastContainer />
  <Header/>
  <Search/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Collection" element={<Collection />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/MyOrder" element={<MyOrder />} />
    <Route path="/PlaceOrder" element={<PlaceOrder />} />
    <Route path="/Signup" element={<SignUp />} />
    <Route path="/Product/:id" element={<Product />} />
  </Routes>
  <Footer/>
  </div >
);

export default AppRoutes;
