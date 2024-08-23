// Profile.jsx
import React from 'react';

function Profile({ setPage }) {
  const handleUpdate = () => {
    setPage('Update'); // Navigate to Update page
  };
  const handleBack = () => {
    setPage('AlumniOptions');
  };


  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-2xl font-bold">Profile</h2>
      <div className="mt-8">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Year Joined</th>
              <th className="px-4 py-2 border">Year Passed</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Experience</th>
              <th className="px-4 py-2 border">Project</th>
              <th className="px-4 py-2 border">Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">2015</td>
              <td className="border px-4 py-2">2019</td>
              <td className="border px-4 py-2">Computer Science</td>
              <td className="border px-4 py-2">3 Years</td>
              <td className="border px-4 py-2">Project A</td>
              <td className="border px-4 py-2">Company X</td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
        <button
          onClick={handleUpdate}
          className="btn mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Update
        </button>
        <button onClick={handleBack} className="btn back-btn">Back</button>
      </div>
    </div>
  );
}

export default Profile;
