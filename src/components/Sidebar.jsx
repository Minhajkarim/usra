import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlinePuzzle,
  HiOutlinePencil,
  HiOutlineBookOpen,
  HiOutlineChatAlt,
  HiOutlineLogout,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import hamburger and close icons

const Sidebar = ({ selectedTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

  const navItems = [
    { id: "dashboard", icon: <HiOutlineHome size={20} />, label: "Dashboard" },
    { id: "tracking", icon: <HiOutlineChartBar size={20} />, label: "Tracking" },
    { id: "funSessions", icon: <HiOutlinePuzzle size={20} />, label: "Fun Sessions" },
    { id: "blogs", icon: <HiOutlinePencil size={20} />, label: "Blogs & Articles" },
    { id: "courses", icon: <HiOutlineBookOpen size={20} />, label: "Online Courses" },
    { id: "coaching", icon: <HiOutlineUserGroup size={20} />, label: "1:1 Coaching" },
    { id: "chat", icon: <HiOutlineChatAlt size={20} />, label: "Chat" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Menu for Smaller Screens */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-blue-500 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-50 min-h-screen w-64 fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        {/* Logo Section */}
        <div className="py-6 px-4">
          <img src="./logo.png" alt="Logo" className="w-24 h-auto mx-auto" />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="./baby.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold leading-8">Alice</h2>
          <p className="text-gray-500 text-sm">2 Years old</p>
        </div>

        {/* Navigation Links */}
        <nav className="w-full px-6 leading-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 py-3 px-4 rounded-full transition-all duration-200 mb-3 
                ${
                  selectedTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 border-2 border-transparent hover:border-gray-400"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <button className="mt-auto py-3 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center gap-3 mx-6">
          <HiOutlineLogout size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
