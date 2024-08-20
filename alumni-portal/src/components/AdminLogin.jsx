import React from 'react';
import useForm from '../hooks/useForm';

function AdminLogin({ setPage }) {
  const [values, handleChange] = useForm({ userId: '', password: '' });

  const handleLogin = () => {
    setPage('AdminEntry');
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Admin Login</h2>
      <div className="mt-8">
        <label className="block text-left">User ID:</label>
        <input
          name="userId"
          type="text"
          value={values.userId}
          onChange={handleChange}
          className="input"
        />
        <label className="block text-left">Password:</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          className="input"
        />
        <button onClick={handleLogin} className="btn mt-4">Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
