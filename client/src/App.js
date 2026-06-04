import React from 'react';
import Navbarr from './components/Navbarr';
import Userlist from './components/Userlist';
import Adduser from './components/Adduser';
import './App.css';

function App() {
  return (
    <div>
      <Navbarr />
      <div className="main-container">
        <div className="header-section">
          <h2>Contacts Overview</h2>
          <Adduser />
        </div>
        <Userlist />
      </div>
    </div>
  );
}

export default App;
