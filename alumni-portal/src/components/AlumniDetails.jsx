import React from 'react';
import useForm from '../hooks/useForm';


function AlumniDetails() {
  const [values, handleChange] = useForm({
    name: '',
    yearJoined: '',
    yearPassed: '',
    course: '',
    experience: '',
    project: '',
    company: '',
  });

  const handleAdd = () => {
    console.log(values);
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Alumni Details</h2>
      <div className="mt-8">
        <label className="block text-left">Name:</label>
        <input name="name" type="text" value={values.name} onChange={handleChange} className="input" />
        <label className="block text-left">Year Joined:</label>
        <input name="yearJoined" type="text" value={values.yearJoined} onChange={handleChange} className="input" />
        <label className="block text-left">Year Passed:</label>
        <input name="yearPassed" type="text" value={values.yearPassed} onChange={handleChange} className="input" />
        <label className="block text-left">Course:</label>
        <select name="course" value={values.course} onChange={handleChange} className="input">
          <option value="Course1">Course1</option>
          <option value="Course2">Course2</option>
        </select>
        <label className="block text-left">Experience:</label>
        <input name="experience" type="text" value={values.experience} onChange={handleChange} className="input" />
        <label className="block text-left">Project:</label>
        <input name="project" type="text" value={values.project} onChange={handleChange} className="input" />
        <label className="block text-left">Company Joined:</label>
        <select name="company" value={values.company} onChange={handleChange} className="input">
          <option value="Company1">Company1</option>
          <option value="Company2">Company2</option>
        </select>
        <button onClick={handleAdd} className="btn mt-4">Add</button>
      </div>
    </div>
  );
}

export default AlumniDetails;
