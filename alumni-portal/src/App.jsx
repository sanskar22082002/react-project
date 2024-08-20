import React, { useState } from 'react';

import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminEntry from './components/AdminEntry';
import AlumniLogin from './components/AlumniLogin';
import AlumniDetails from './components/AlumniDetails';
import AlumniSearch from './components/AlumniSearch';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <>
      {page === 'Home' && <Home setPage={setPage} />}
      {page === 'AdminLogin' && <AdminLogin setPage={setPage} />}
      {page === 'AdminEntry' && <AdminEntry />}
      {page === 'AlumniLogin' && <AlumniLogin setPage={setPage} />}
      {page === 'AlumniDetails' && <AlumniDetails />}
      {page === 'AlumniSearch' && <AlumniSearch />}
    </>
  );
}

export default App;
