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

  // Handle back button to close the form
  React.useEffect(() => {
    const handleBackButton = () => {
      if (isFormOpen) {
        setIsFormOpen(false);
        return true;
      }
      return false;
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isFormOpen]);

  return (
    <div className="overflow-auto h-screen">
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      {!isFormOpen && (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-2">
            Your Information is Valuable to Manage Disasters
          </h1>
          <p className="text-gray-600 mb-6">
            Inform us about changes, incidents, or disasters in your area. Your contribution helps
            us respond quickly and effectively.
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
