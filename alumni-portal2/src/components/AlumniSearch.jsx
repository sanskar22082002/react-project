import React, { useState } from 'react';

function AlumniSearch({ setPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);

    // Simulated fetch results
    const fetchedResults = [
      { name: 'John Doe', yearJoined: 2010, course: 'Course1' },
      { name: 'Jane Smith', yearJoined: 2012, course: 'Course2' },
    ].filter((alumni) =>
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(fetchedResults);
  };

  const handleBack = () => {
    setPage('Home'); // Ensure 'Home' is a valid page state
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Search</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Alumni..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input border-gray-300 rounded p-2 w-1/2"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-500 hover:bg-blue-600 text-white p-2 rounded ml-4"
        >
          Search
        </button>
      </div>
      <div className="mt-8">
        {results.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Year Joined</th>
                <th className="border border-gray-300 p-2">Course</th>
              </tr>
            </thead>
            <tbody>
              {results.map((alumni, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{alumni.name}</td>
                  <td className="border border-gray-300 p-2">{alumni.yearJoined}</td>
                  <td className="border border-gray-300 p-2">{alumni.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No results found.</p>
        )}
        <button onClick={handleBack} className="btn bg-gray-500 hover:bg-gray-600 text-white p-2 rounded mt-4">
          Back
        </button>
      </div>
    </div>
  );
}

export default AlumniSearch;
