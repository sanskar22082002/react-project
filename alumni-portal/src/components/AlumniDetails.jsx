import React, { useState } from 'react';
import useForm from '../hooks/useForm';

function AlumniDetails({ setPage }) {
  const [values, handleChange, resetForm] = useForm({
    name: '',
    yearJoined: '',
    yearPassed: '',
    course: '',
    experience: '',
    project: '',
    company: '',
  });

  const [dataAdded, setDataAdded] = useState(false);

  const handleAdd = () => {
    // Check if all fields are filled
    if (
      !values.name.trim() ||
      !values.yearJoined.trim() ||
      !values.yearPassed.trim() ||
      !values.course.trim() ||
      !values.experience.trim() ||
      !values.project.trim() ||
      !values.company.trim()
    ) {
      alert('All fields are required.');
      return;
    }

    // Log the values (or handle the form submission logic)
    console.log(values);

    // Show "Data Added" message
    setDataAdded(true);

    // Hide the message and clear the form after 1 second
    setTimeout(() => {
      setDataAdded(false); // Hide the "Data Added" message
      resetForm(); // Clear the form fields
    }, 1000);
  };

  const handleLogout = () => {
    setPage('Home'); // Navigate to Home page
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
        <h2 className="text-2xl font-bold">Alumni Details</h2>
        <div className="mt-8">
          <label className="block text-left">Name:</label>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Year Joined:</label>
          <input
            name="yearJoined"
            type="text"
            value={values.yearJoined}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Year Passed:</label>
          <input
            name="yearPassed"
            type="text"
            value={values.yearPassed}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Course:</label>
          <select
            name="course"
            value={values.course}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          >
            <option value="">Select Course</option>
            <option value="Course1">Course1</option>
            <option value="Course2">Course2</option>
          </select>
          <label className="block text-left mt-4">Experience:</label>
          <input
            name="experience"
            type="text"
            value={values.experience}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Project:</label>
          <input
            name="project"
            type="text"
            value={values.project}
            onChange={handleChange}
            className="input border-gray-300 rounded p-2"
            required
          />
          <label className="block text-left mt-4">Which Company you Joined?</label>
          <input
            name="company"
            type="text"
            value={values.company}
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

export default AlumniDetails;
