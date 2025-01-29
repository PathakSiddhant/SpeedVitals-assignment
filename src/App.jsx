// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DeviceDropdown from './components/DeviceDropdown';
import Graph from './components/Graph';
import './App.css';

const App = () => {
  const [selectedDevice, setSelectedDevice] = useState('desktop');
  const [darkMode, setDarkMode] = useState(false);

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>SpeedVitals Internship Assessment</h1>
      <DeviceDropdown selectedDevice={selectedDevice} onChange={handleDeviceChange} />
      <div className="graphs">
        <div className="graph1">
          <Graph  metric="cls" device={selectedDevice} title="Cumulative Layout Shift" darkmode={darkMode} />
        </div>
        <div className="graph2">
          <Graph  metric="lcp" device={selectedDevice} title="Largest Contentful Paint" darkmode={darkMode}/>
        </div>
        
        
      </div>
      <footer>
        <p>Copyright © 2025</p> 
      </footer>
    </div>
  );
};

export default App;
