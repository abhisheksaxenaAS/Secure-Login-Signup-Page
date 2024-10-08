import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate(); // Call useNavigate

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/auth/home', {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.status !== 200) { // Check for status 200
        navigate('/login');
      }
    } catch (err) {
      navigate('/login');
      console.error("Error fetching user data: ", err); // Improve error handling
    }
  };

  useEffect(() => {
    fetchUser(); // Call fetchUser on component mount
  }, []);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
