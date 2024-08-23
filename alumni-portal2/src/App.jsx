// src/App.jsx
import React, { useState } from 'react';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminEntry from './components/AdminEntry';
import AlumniLogin from './components/AlumniLogin';
import AlumniOptions from './components/AlumniOptions';
import AlumniDetails from './components/AlumniDetails';
import Profile from './components/Profile';
import Update from './components/Update';
import AlumniSearch from './components/AlumniSearch';

function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <Home setPage={setPage} />;
      case 'AdminLogin':
        return <AdminLogin setPage={setPage} />;
      case 'AdminEntry':
        return <AdminEntry setPage={setPage} />;
      case 'AlumniLogin':
        return <AlumniLogin setPage={setPage} />;
      case 'AlumniOptions':
        return <AlumniOptions setPage={setPage} />;
      case 'AlumniDetails':
        return <AlumniDetails setPage={setPage} />;
      case 'Profile':
        return <Profile setPage={setPage} />;
      case 'Update':
        return <Update setPage={setPage} />;
      case 'AlumniSearch':
        return <AlumniSearch />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
