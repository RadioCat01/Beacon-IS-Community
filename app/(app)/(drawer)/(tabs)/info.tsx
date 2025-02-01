import React, { useState } from "react";

const Info: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    gnDivision: "",
    additionalDetails: "",
  });

  const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="overflow-auto h-screen">
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 relative">
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleEdit}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>

        <h1 className="text-2xl font-bold mb-6 text-gray-700">Disaster Information Form</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
              }`}
            >
              <option value="" disabled>
                Select a district
              </option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">GN Division</label>
            <input
              type="text"
              name="gnDivision"
              value={formData.gnDivision}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">Additional Details</label>
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
              }`}
            />
          </div>

          {isEditing && (
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Save
            </button>
          )}
        </form>

        {!isEditing && (
          <div className="mt-6 space-y-2">
            <h2 className="text-xl font-bold text-gray-700">Saved Information</h2>
            <p><strong>Name:</strong> {formData.name || "Not provided"}</p>
            <p><strong>Address:</strong> {formData.address || "Not provided"}</p>
            <p><strong>District:</strong> {formData.district || "Not provided"}</p>
            <p><strong>GN Division:</strong> {formData.gnDivision || "Not provided"}</p>
            <p><strong>Additional Details:</strong> {formData.additionalDetails || "Not provided"}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Info;



