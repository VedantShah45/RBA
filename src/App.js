import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

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
    saveAsCSV(details);
  };

  const saveAsCSV = (data) => {
    const csvData = Object.keys(data).map(key => `${key},${data[key]}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'form_data.csv');
  };

  return (
    <div className="container">
      <h1 className="title">Enter Details</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Form fields */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
