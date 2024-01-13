import React, { useState } from 'react';
// import axios from 'axios';


const urlApi = "http://localhost:3000";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    assetNo: '',
    assetDescription: '',
    serialNo: '',
    dateAcquired: '',
    purchasePrice: '',
    currentValue: '',
    dateSold: '',
    nextMaintenanceDate: '',
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    alert('hhh');

    window.location.href = '/';

    try {
      const response = await fetch.post(urlApi, formData);
      console.log('Post request successful', response.data);
      // You can handle success, redirect, or update UI here
    } catch (error) {
      console.error('Error making POST request', error.response);
      // Handle error (show message, log, etc.)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Asset Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Render your form fields with Tailwind CSS styling */}
        {/* Example for one field, repeat for others */}
        <div className="mb-4">
          <label htmlFor="assetNo" className="block text-sm font-medium text-gray-600">
            Asset Number
          </label>
          <input
            type="number"
            id="assetNo"
            name="assetNo"
            value={formData.assetNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="assetDescription" className="block text-sm font-medium text-gray-600">
            Asset Description
          </label>
          <input
            type="text"
            id="assetDescription"
            name="assetDescription"
            value={formData.assetDescription}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="serialNo" className="block text-sm font-medium text-gray-600">
            Serial Number
          </label>
          <input
            type="number"
            id="serialNo"
            name="serialNo"
            value={formData.serialNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateAcquired" className="block text-sm font-medium text-gray-600">
            Date Acquired
          </label>
          <input
            type="date"
            id="dateAcquired"
            name="dateAcquired"
            value={formData.dateAcquired}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-600">
            Purchase Price
          </label>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required

          />
        </div>

        <div className="mb-4">
          <label htmlFor="currentValue" className="block text-sm font-medium text-gray-600">
            Current Value
          </label>
          <input
            type="number"
            id="currentValue"
            name="currentValue"
            value={formData.currentValue}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required

          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateSold" className="block text-sm font-medium text-gray-600">
            Date Sold
          </label>
          <input
            type="date"
            id="dateSold"
            name="dateSold"
            value={formData.dateSold}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required

          />
        </div>

        <div className="mb-4">
          <label htmlFor="nextMaintenanceDate" className="block text-sm font-medium text-gray-600">
            Next Maintenance Date
          </label>
          <input
            type="date"
            id="nextMaintenanceDate"
            name="nextMaintenanceDate"
            value={formData.nextMaintenanceDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required

          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetForm;
