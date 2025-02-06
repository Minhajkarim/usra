import React, { useState } from "react";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true); // Toggle email notifications
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirmation do not match.");
      return;
    }

    // Simulate an API call to update the password
    const response = await fetch("http://localhost/usra-dashboard-backend/change-password.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setSuccessMessage("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setErrorMessage(data.message || "Failed to change password. Please try again.");
    }
  };

  // Handle email notification toggle
  const handleToggleEmailNotifications = async () => {
    setEmailNotifications(!emailNotifications);

    // Simulate an API call to update the notification settings
    await fetch("http://localhost/usra-dashboard-backend/update-settings.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailNotifications: !emailNotifications }),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Account Settings</h2>

        {/* Success and Error Messages */}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Password Change Section */}
        <form onSubmit={handlePasswordChange}>
          <h3 className="text-lg font-medium mb-4">Change Password</h3>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Update Password
          </button>
        </form>

        {/* Notification Preferences */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={handleToggleEmailNotifications}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="text-sm text-gray-700">Enable email notifications</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
