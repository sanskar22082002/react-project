import React from 'react';
import useForm from '../hooks/useForm';


function AdminEntry() {
  const [values, handleChange] = useForm({ rollNo: '', id: '' });

  const handleAdd = () => {
    console.log(`Roll No: ${values.rollNo}, ID: ${values.id}`);
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Admin Entry</h2>
      <div className="mt-8">
        <label className="block text-left">Roll No:</label>
        <input
          name="rollNo"
          type="text"
          value={values.rollNo}
          onChange={handleChange}
          className="input"
        />
        <label className="block text-left">ID:</label>
        <input
          name="id"
          type="text"
          value={values.id}
          onChange={handleChange}
          className="input"
        />
        <button onClick={handleAdd} className="btn mt-4">Add</button>
      </div>
    </div>
  );
}

export default AdminEntry;
