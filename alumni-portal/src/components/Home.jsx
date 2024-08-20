import React from 'react';


function Home({ setPage }) {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-3xl font-bold">Alumni Portal</h1>
      <div className="mt-8 space-y-4">
        <button onClick={() => setPage('AdminLogin')} className="btn">Admin Login</button>
        <button onClick={() => setPage('AlumniLogin')} className="btn">Alumni Login</button>
        <button onClick={() => setPage('AlumniSearch')} className="btn">Alumni Search</button>
      </div>
    </div>
  );
}

export default Home;
