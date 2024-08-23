import React from 'react';
import useForm from '../hooks/useForm';

function AdminLogin({ setPage }) {
  const [values, handleChange] = useForm({ userId: '', password: '' });

  const handleLogin = () => {
    if (values.userId.trim() === '' || values.password.trim() === '') {
      alert('Both User ID and Password are required.');
      return;
    }
    setPage('AdminEntry');
  };

  const handleHome = () => {
    setPage('Home'); // Navigate to Home page
  };

  return (
    <div className="container mx-auto">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button
          onClick={handleHome}
          className="btn bg-green-500 hover:bg-green-600 text-white"
        >
          Home
        </button>
      </header>
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <div className="mt-8">
          <label className="block text-left">User ID:</label>
          <input
            name="userId"
            type="text"
            value={values.userId}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Password:</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <button
            onClick={handleLogin}
            className="btn mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
