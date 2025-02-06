import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe"); // Initial name (can be fetched from the backend)
  const [email, setEmail] = useState("johndoe@example.com"); // Initial email (can be fetched from the backend)
  const [profilePicture, setProfilePicture] = useState(null); // For storing profile picture preview
  const [selectedFile, setSelectedFile] = useState(null); // File to upload
  const [successMessage, setSuccessMessage] = useState("");

  // Handle profile picture selection
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setProfilePicture(URL.createObjectURL(file)); // Create a preview of the selected file
    }
  };

  // Handle form submission
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Perform the update logic here, e.g., send data to the backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (selectedFile) {
      formData.append("profile_picture", selectedFile); // Add the file to the form data
    }

    // Simulating an API call
    fetch("http://localhost/usra-dashboard-backend/update-profile.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Profile updated successfully!");
        } else {
          setSuccessMessage("Failed to update profile. Please try again.");
        }
      })
      .catch(() => setSuccessMessage("An error occurred. Please try again."));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>

        {/* Profile Picture Section */}
        <div className="mb-6 text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-blue-500">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                No Image
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-4"
            onChange={handleProfilePictureChange}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 text-center text-green-500">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
