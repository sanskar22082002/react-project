import React, { useState } from 'react';
import useForm from '../hooks/useForm';

function AdminEntry({ setPage }) {
  const [values, handleChange, resetForm] = useForm({ rollNo: '', id: '' });
  const [dataAdded, setDataAdded] = useState(false);

  const handleAdd = () => {
    if (values.rollNo.trim() === '' || values.id.trim() === '') {
      alert('Both Roll No and ID are required.');
      return;
    }
    console.log(`Roll No: ${values.rollNo}, ID: ${values.id}`);
    setDataAdded(true);

    // Clear the form and remove the message after 1 second
    setTimeout(() => {
      resetForm();
      setDataAdded(false);
    }, 1000);
  };

  const handleLogout = () => {
    setPage('Home')
  };

  return (
    <div className="container mx-auto">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button
          onClick={handleLogout}
          className="btn bg-red-500 hover:bg-red-600 text-white"
        >
          Logout
        </button>
      </header>
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Admin Entry</h2>
        <div className="mt-8">
          <label className="block text-left">Roll No:</label>
          <input
            name="rollNo"
            type="text"
            value={values.rollNo}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">ID:</label>
          <input
            name="id"
            type="text"
            value={values.id}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <button
            onClick={handleAdd}
            className="btn mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded"
          >
            Add
          </button>
          {dataAdded && <p className="mt-4 text-green-500">Data Added</p>}
        </div>
      </div>
    </div>
  );
}

export default AdminEntry;
