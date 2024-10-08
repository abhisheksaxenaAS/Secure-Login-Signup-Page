import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [values,setValues]= useState({
    name:'',
    email:'',
    password:''
  })
  const navigate = useNavigate();
const handleChanges=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
}
const handleSubmit=async (e)=>{
e.preventDefault()
try{
  const response= await axios.post('http://localhost:3000/auth/register', values)
  if(response.status===201){
navigate('/login')
  }
  
   } catch(err){
console.log(err.message);
  }
}


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <h2 className='text-lg font-bold mb-4'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700'>Name</label>
            <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border' name='name' onChange={handleChanges}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700'>Email</label>
            <input type="text" placeholder='Enter Email' className='w-full px-3 py-2 border' name='email' onChange={handleChanges} />
          </div>

          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700'>Password</label>
          <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border' name='password' onChange={handleChanges} />
          </div>

          <button className='w-full bg-green-600 text-white py-2'>Sign UP</button>
        </form>
        <div className='text-center mt-4'>
            <span>Already have an account?</span>
            <Link to='/login' className='text-blue-400 ml-2'>Login</Link>
        </div>
        
     
    </div>
</div>
  )
}

export default Register
