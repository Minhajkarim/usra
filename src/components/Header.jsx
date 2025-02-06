import React, { useState } from "react";
import { HiOutlineSearch, HiOutlineBell, HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileOpen(false); // Close profile dropdown when opening notification
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationOpen(false); // Close notification dropdown when opening profile
  };

  return (
    <div className="flex flex-wrap justify-between items-center p-4">
      {/* Search Section */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-start items-center mb-4 lg:mb-0">
        <div className="relative w-full lg:w-96">
          <input
            type="text"
            placeholder="Tap to search"
            className="pl-10 pr-4 py-2 bg-blue-100 rounded-full text-sm w-full outline-none focus:ring-2 focus:ring-blue-300"
          />
          <HiOutlineSearch
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Notification and Profile Section */}
      <div className="flex items-center justify-center w-full lg:w-auto space-x-6 relative">
        {/* Notification Icon */}
        <button
          className="relative"
          onClick={toggleNotificationDropdown}
        >
          <HiOutlineBell size={24} className="text-blue-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Notification Dropdown */}
        {isNotificationOpen && (
          <div className="absolute top-10 right-0 w-64 bg-white border rounded-lg shadow-lg z-10">
            <div className="p-4 text-sm text-gray-700">
              <p className="font-semibold">Notifications</p>
              <ul className="mt-2 space-y-2">
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Notification 1
                </li>
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Notification 2
                </li>
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Notification 3
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Profile Icon */}
        <button onClick={toggleProfileDropdown}>
          <HiOutlineUserCircle size={32} className="text-blue-600" />
        </button>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="absolute top-10 right-0 w-48 bg-white border rounded-lg shadow-lg z-10">
            <ul className="text-sm text-gray-700">
              <li
                className="p-3 hover:bg-gray-100 cursor-pointer rounded-t-lg"
                onClick={() => navigate("/profile")} // Navigate to Profile page
              >
                Profile
              </li>
              <li
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/settings")} // Navigate to Settings page
              >
                Settings
              </li>
              <li
                className="p-3 hover:bg-gray-100 cursor-pointer rounded-b-lg"
                onClick={() => navigate("/logout")} // Simulate Logout (or redirect)
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
