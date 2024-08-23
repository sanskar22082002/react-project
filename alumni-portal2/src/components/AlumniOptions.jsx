
import React from 'react';


function AlumniOptions({ setPage }) {
  const handleLogout = () => {
    setPage('Home');
  };

  const goToAlumniDetails = () => {
    setPage('AlumniDetails');
  };

  const goToUpdateAlumni = () => {
    setPage('Profile');
  };

  return (
    <div className="alumni-options-container">
      <h2>Alumni Options</h2>
      <button onClick={goToAlumniDetails} className="btn">Alumni Details</button>
      <button onClick={goToUpdateAlumni} className="btn">Profile</button>
      <button onClick={handleLogout} className="btn logout-btn">Logout</button>
    </div>
  );
}

export default AlumniOptions;
