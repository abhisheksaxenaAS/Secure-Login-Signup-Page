import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  
   // State to handle error messages
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error before a new request
    setError(''); 
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // To show a specific error for wrong password
        setError('Invalid password'); 
      } else if (err.response && err.response.status === 404) {
        // To show a specific error for non-existing users
        setError('User does not exist'); 
      } else {
        // General error message
        setError('Login failed. Please try again.'); 
      }
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <h2 className='text-lg font-bold mb-4'>Login</h2>
        
        {error && <div className="text-red-500 mb-4">{error}</div>} {}
        
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700'>Email</label>
            <input 
              type="text" 
              placeholder='Enter Email' 
              className='w-full px-3 py-2 border' 
              name='email' 
              onChange={handleChanges} 
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700'>Password</label>
            <input 
              type="password" 
              placeholder='Enter Password' 
              className='w-full px-3 py-2 border' 
              name='password' 
              onChange={handleChanges} 
            />
          </div>

          <button className='w-full bg-green-600 text-white py-2'>Login</button>
        </form>
        
        <div className='text-center mt-4'>
          <span>Don't have an account?</span>
          <Link to='/register' className='text-blue-400 ml-2'>Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
