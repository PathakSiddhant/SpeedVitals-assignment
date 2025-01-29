// src/components/DeviceDropdown.js
import React from 'react';
import './DeviceDropdown.css';

const DeviceDropdown = ({ selectedDevice, onChange }) => {
  return (
    <div className="device-dropdown-section">
      <label htmlFor="device-dropdown" className="dropdown-label">Choose a Device:</label>
      <select id="device-dropdown" value={selectedDevice} onChange={onChange} className="dropdown-select">
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default DeviceDropdown;