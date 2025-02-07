import axios from 'axios';
import React, { useState } from 'react'
import { backendURL } from '../App';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState("");

 const  handleSubmit=async(e)=>{
try {
    e.preventDefault()
   const response=await axios.post('http://localhost:4000/api/user/AdminLogin',{email,password}) 
   console.log(response);
   toast.success("Login successfully ")
   setTimeout(()=>{
    toast.success("Welcome Admin")

   },2000)

   
   setTimeout(()=>{
    if(response.data.success){
        setToken(response.data.token)
           }
   },2000)
 
  

} catch (error) {
    toast.error("failed to login")
}
 }

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
                    <div>
                        <label for="email"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email"  onChange={(e)=>(setEmail(e.target.value))} value={email}  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" onChange={(e)=>(setPassword(e.target.value))} value={password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                
                    <button type="submit" class="w-full text-white text-xl bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
    
  )
}

export default Login
