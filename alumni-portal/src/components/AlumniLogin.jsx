import React from 'react';
import useForm from '../hooks/useForm';


function AlumniLogin({ setPage }) {
  const [values, handleChange] = useForm({ uid: '', password: '' });

  const handleLogin = () => {
    // Authentication logic here
    setPage('AlumniDetails');
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Alumni Login</h2>
      <div className="mt-8">
        <label className="block text-left">UID:</label>
        <input
          name="uid"
          type="text"
          value={values.uid}
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

export default AlumniLogin;
