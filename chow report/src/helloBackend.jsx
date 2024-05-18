import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HelloBackend = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        console.log('Response data:', response.data); // Log response data
        setMessage(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <p className='text-sky-400'>Message from Flask backend: {message}</p>
    </div>
  );
};

export default HelloBackend;
