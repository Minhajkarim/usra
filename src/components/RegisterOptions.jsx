import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Register As</h2>
        
        <div className="flex flex-col space-y-4">
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={() => navigate("/register/parent")}
          >
            Parent
          </button>
          <button 
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            onClick={() => navigate("/register/expert")}
          >
            Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterOptions;