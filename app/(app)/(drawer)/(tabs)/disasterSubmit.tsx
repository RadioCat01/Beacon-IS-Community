

import React, { useState } from "react";

const Home: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    location: "",
    description: "",
    phoneNumber: "",
    photo: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      address: "",
      location: "",
      description: "",
      phoneNumber: "",
      photo: null,
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
    }, 3000);
  };

  return (
    <div className="overflow-auto h-screen bg-gray-100">
      {/* 🔴 Hero Section with Emergency Contact Info */}
      <div className="relative w-full h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center bg-[url('https://source.unsplash.com/1600x900/?disaster,emergency')]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Report Disasters & Help Save Lives</h1>
          <p className="text-lg mb-6">Your reports help emergency teams respond faster and save communities.</p>
          <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="font-semibold text-lg">Emergency Hotline: +94 112 456 789</p>
          </div>
        </div>
      </div>

      {/* 🔵 Key Statistics & Impact Information */}
      {/* <div className="max-w-5xl mx-auto py-12 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Impact of Your Reports</h2>
        <div className="grid grid-cols-3 gap-6 text-white">
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">1,250+</h3>
            <p>Disasters Reported</p>
          </div>
          <div className="bg-green-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold">95%</h3>
            <p>Cases Resolved</p>
          </div>
          <div className="bg-orange-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">50% Faster</h3>
            <p>Emergency Response Time</p>
          </div>
        </div>
      </div> */}

      <div className="max-w-5xl mx-auto py-12 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Impact of Your Reports</h2>
        <div className="space-y-6 text-white">
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">1,250+</h3>
        <p>Disasters Reported</p>
          </div>
          <div className="bg-green-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">95%</h3>
        <p>Cases Resolved</p>
          </div>
          <div className="bg-orange-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">50% Faster</h3>
        <p>Emergency Response Time</p>
          </div>
        </div>
      </div>

      {/* 🟢 Guidelines for Effective Reporting */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">How to Report Effectively</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 1</h3>
            <p className="text-gray-600">Provide detailed location and type of disaster.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 2</h3>
            <p className="text-gray-600">Attach clear photos if possible.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Step 3</h3>
            <p className="text-gray-600">Provide a valid contact number for responders.</p>
          </div>
        </div>
      </div>

      {/* 🟠 Real-Time Disaster Updates (Static UI for now) */}
      {/* <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Real-Time Disaster Updates</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex justify-between bg-white p-4 rounded-md shadow">
              <span className="font-semibold">Flood Alert - Colombo</span>
              <span className="text-red-500">⚠️ High Risk</span>
            </li>
            <li className="flex justify-between bg-white p-4 rounded-md shadow">
              <span className="font-semibold">Landslide Warning - Kandy</span>
              <span className="text-yellow-500">⚠️ Moderate Risk</span>
            </li>
            <li className="flex justify-between bg-white p-4 rounded-md shadow">
              <span className="font-semibold">Tsunami Alert - Galle</span>
              <span className="text-red-500">⚠️ High Risk</span>
            </li>
          </ul>
        </div>
      </div> */}

      {/* 🔴 Disaster Reporting Form Section */}
      <div className="p-6 flex items-center justify-center mt-0">
        {!isFormOpen && (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Information is Valuable</h2>
            <p className="text-gray-600 mb-6">
              Inform us about disasters in your area. Your contribution helps us respond quickly.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
              onClick={() => setIsFormOpen(true)}
            >
              Inform About Disaster
            </button>
          </div>
        )}

{isFormOpen && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Disaster Incident Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Location of Incident</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Description of Disaster</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Upload Photo (Optional)</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl text-green-600 font-semibold">Successfully Submitted!</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
