import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-blue-600">
            <img src="./logo.png" alt="logo" />
          </div>
          
          {/* Description */}
          <p className="text-gray-600">Welcome to our platform. Sign in or register to continue.</p>
          
          {/* Login/Register Links */}
          <div className="flex space-x-4">
            <button 
              className="w-1/2 bg-white text-black py-2 rounded-full border border-black hover:bg-brown-500"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button 
              className="w-1/2 bg-blue-500 text-white py-2 rounded-full hover:bg-red-500"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
        
        {/* Right Section - Image */}
        <div className="w-1/2">
          <img
            src="./auth-img.png"
            alt="Auth Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;