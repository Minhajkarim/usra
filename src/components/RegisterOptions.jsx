import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Lightbulb } from "lucide-react";

const RegisterOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">Register As</h2>

        <div className="flex space-x-6">
          {/* Parent Option */}
          <button 
            className="flex-1 flex flex-col items-center rounded-lg justify-center bg-blue-500 text-white py-5 px-8 text-xl font-semibold hover:bg-blue-600 transition"
            onClick={() => navigate("/register/parent")}
          >
            <Heart className="w-10 h-10 mb-2" />
            Parent
          </button>

          {/* Expert Option */}
          <button 
            className="flex-1 flex flex-col items-center rounded-lg justify-center bg-blue-500 text-white py-5 px-8 text-xl font-semibold hover:bg-blue-600 transition"
            onClick={() => navigate("/register/expert")}
          >
            <Lightbulb className="w-10 h-10 mb-2" />
            Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterOptions;
