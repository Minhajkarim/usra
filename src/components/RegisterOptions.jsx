import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterOptions = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('./Group42.png')" }}
    >
      {/* Logo in the top left corner */}
      <img src="/logo.png" alt="Logo" className="absolute top-4 left-4 w-40 h-20" />
      
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Register</h2>
      
      <div className="flex space-x-16">
        {/* Parent Option */}
        <button
          className="flex flex-col items-center justify-center w-48 h-48 rounded-xl transition space-y-4"
          onClick={() => navigate("/register/parent")}
        >
          <img src="/parent.svg" alt="Parent" className="w-32 h-32" />
          <span className="text-xl text-black font-semibold">Parent</span>
        </button>

        {/* Expert Option */}
        <button
          className="flex flex-col items-center justify-center w-48 h-48 rounded-xl transition space-y-4"
          onClick={() => navigate("/register/expert")}
        >
          <img src="/expert.svg" alt="Expert" className="w-32 h-32" />
          <span className="text-xl text-black font-semibold">Expert</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterOptions;