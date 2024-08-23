// Update.jsx
import React from 'react';
import useForm from '../hooks/useForm';

function Update({ setPage }) {
  const [values, handleChange, resetForm] = useForm({
    name: '',
    yearJoined: '',
    yearPassed: '',
    course: '',
    experience: '',
    project: '',
    company: '',
  });

  const handleSave = () => {
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

    console.log('Saved:', values);
    alert('Data saved');

    setTimeout(() => {
      resetForm(); // Clear the form fields
    }, 1000);
  };
  const handleBack = () => {
    setPage('Profile');
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Update Alumni Information</h2>
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
        <label className="block text-left mt-4">Company:</label>
        <input
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange}
          className="input border-gray-300 rounded p-2"
          required
        />
        <button
          onClick={handleSave}
          className="btn mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Save
        </button>
        <button onClick={handleBack} className="btn back-btn">Back</button>
      </div>
    </div>
  );
}

export default Update;
