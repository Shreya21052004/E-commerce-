import React, { useState } from 'react';
import { signup } from '../services/auth'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name :formData.name,email: formData.email, password:formData.password, phone: formData.phone});
        console.log(response.data)
      setSuccess('Signup successful!');
      setError('');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError(error.message || 'Signup failed');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Create new Account</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">NAME</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full border rounded px-3 py-2" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">EMAIL</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full border rounded px-3 py-2" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">PASSWORD</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="w-full border rounded px-3 py-2" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">PHONE NUMBER</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="w-full border rounded px-3 py-2" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
