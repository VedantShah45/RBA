import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css'; // Import the CSS file for styling

function App() {
  const [details, setDetails] = useState({
    ipAddress: '',
    country: '',
    asn: '',
    userAgent: '',
    browser: '',
    os: '',
    deviceType: '',
    loginSuccessful: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the details
    console.log('Submitted details:', details);
    saveAsCSV(details); // Save form data as CSV
  };

  const saveAsCSV = (data) => {
    const csvData = Object.entries(data).map(([key, value]) => `${key},${value}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'form_data.csv');
  };

  return (
    <div className="container">
      <h1 className="title">Enter Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="label">IP Address:</label>
          <input type="text" name="ipAddress" value={details.ipAddress} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">Country:</label>
          <input type="text" name="country" value={details.country} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">ASN:</label>
          <input type="text" name="asn" value={details.asn} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">User Agent String:</label>
          <input type="text" name="userAgent" value={details.userAgent} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">Browser Name/Version:</label>
          <input type="text" name="browser" value={details.browser} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">OS Name/Version:</label>
          <input type="text" name="os" value={details.os} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">Device Type:</label>
          <input type="text" name="deviceType" value={details.deviceType} onChange={handleChange} className="input-field" />
        </div>
        <div className="input-group">
          <label className="label">Login Successful:</label>
          <input type="checkbox" name="loginSuccessful" checked={details.loginSuccessful} onChange={() => setDetails(prevDetails => ({...prevDetails, loginSuccessful: !prevDetails.loginSuccessful}))} className="checkbox-field" />
        </div>
        <button type="submit" className="submit-btn">Submit & Save as CSV</button>
      </form>
    </div>
  );
}

export default App;
