import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [authone,setAuthone]=useState('SignUp');
  const {token,setToken,Navigate}=useContext(ShopContext);
const [email,setEmail]=useState("");


const [name, setname] = useState("")
const [password, setpassword] = useState("")


  const onsubmitHandler=async(e)=>{
    e.preventDefault();
try {
 
  if(authone==='SignUp'){
    const {data}=await axios.post("http://localhost:4000/api/user/register",{name,email,password})
    console.log(data);
    if(data?.success){
      setToken(data?.userToken);
      localStorage.setItem("token",data?.userToken);
      setEmail("")
      setname("")
      setpassword("")
    }
    if(!data?.success)
      toast.error(data?.message)


  }
  else{
    const {data}=await axios.post("http://localhost:4000/api/user/login",{email,password})
    console.log(data);
    
    if(data?.success){
      setToken(data?.userToken);
      localStorage.setItem("token",data?.userToken);
      toast.success(data?.message);
     
    }
    else
    toast.error(data?.message)
   
  }
  
} catch (error) {
  console.log(error);
  toast.error(error);
}



  }
  useEffect(() => {
    if(token){
      Navigate('/')
    }

  }, [token])
  

  return (
    <div className='flex justify-center  py-10 '>
    <form onSubmit={onsubmitHandler} className='flex flex-col w-full sm:w-1/2 items-center gap-3'>
      <div className='flex items-center gap-2'>
        <h1 className='prata-regular  font-semibold text-3xl'>{authone}</h1>
        <p className='w-8 sm:w-10  h-[1.6px]  bg-[#414141]' />
      </div>
     {authone==='SignUp'?<input onChange={(e)=>setname(e.target.value)} value={name} className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' type="text" placeholder='Name' />:<></>}
      
      <input onChange={(e)=>setEmail(e.target.value)} value={email}  className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' type="email" placeholder='Email' />
      <input onChange={(e)=>setpassword(e.target.value)} value={password}  type="password" className='w-full sm:w-[60%] py-2 px-2 border-[1px] border-black  ' placeholder='password' />
      <div className='flex space-x-28'>
        
      <p  className=''>Forget your Password?</p>
      <div onClick={(()=>authone==='Login'?setAuthone('SignUp'):setAuthone('Login'))}>
      {authone==='Login'?<p className='text-[15px] font-light cursor-pointer '>create account</p>:<p className='text-[15px] font-light cursor-pointer '>Login here</p>}
      </div>
     
      </div>
      <button type='submit' className='px-8 py-2 mt-4 bg-black text-white'>{authone}</button>

      
    </form>
    </div>
  )
}

export default Login
