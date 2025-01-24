import React, { useState } from 'react'

const Login = () => {
  const [authone,setAuthone]=useState('Login');
  return (
    <div className='flex justify-center  py-10 '>
    <form className='flex flex-col w-full sm:w-1/2 items-center gap-3'>
      <div className='flex items-center gap-2'>
        <h1 className='prata-regular  font-semibold text-3xl'>{authone}</h1>
        <p className='w-8 sm:w-10  h-[1.6px]  bg-[#414141]' />
      </div>
     {authone==='SignUp'?<input className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' type="text" placeholder='Name' />:<></>}
      
      <input className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' type="email" placeholder='Email' />
      <input type="password" className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' placeholder='password' />
      <div className='flex space-x-28'>
        
      <p  className=''>Forget your Password?</p>
      <div onClick={(()=>authone==='Login'?setAuthone('SignUp'):setAuthone('Login'))}>
      {authone==='Login'?<p className='text-[15px] font-light cursor-pointer '>create account</p>:<p className='text-[15px] font-light cursor-pointer '>Login here</p>}
      </div>
     
      </div>
      <button className='px-8 py-2 mt-4 bg-black text-white'>{authone}</button>

      
    </form>
    </div>
  )
}

export default Login
