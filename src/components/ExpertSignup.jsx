import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpertSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <img src="/parent1.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      {/* Logo in the top-left corner */}
      <img src="/logo.png" alt="Logo" className="absolute top-6 left-6 w-24" />
      {/* Increased Container Width */}
      <div className="w-full max-w-3xl p-10 rounded-lg overflow-hidden relative" style={{ backgroundImage: 'url("/yellowbg.png")', backgroundSize: "cover" }}>
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
          Sign Up as an Expert
        </h2>

        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <img src="/illustration2.png" alt="Illustration" className="w-42 h-auto" />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 space-x-8"
            style={{ transform: `translateX(-${(step - 1) * 105}%)` }}
          >
            {/* Step 1: Email & Password */}
            <div className="w-full flex-shrink-0 p-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-4 mb-6 border border-gray-300 rounded-md"
              />
              <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Step 2: Personal Information */}
            <div className="w-full flex-shrink-0 p-6">
              <select className="w-full p-4 mb-4 border border-gray-300 rounded-md">
                <option disabled selected>I am a...</option>
                <option>Owner</option>
                <option>Teacher</option>
                <option>Administrator</option>
                <option>Caregiver</option>
                <option>Director</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="School Name"
                className="w-full p-4 mb-6 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-8 py-3 rounded-md hover:bg-gray-500"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Step 3: Activity Plan Questions */}
            <div className="w-full flex-shrink-0 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    What day of the week should your activity plan start?
                  </label>
                  <select className="w-full p-4 border border-gray-300 rounded-md">
                    <option>Saturday</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednedday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    How many days a week will you be using the activity plan?
                  </label>
                  <select className="w-full p-4 border border-gray-300 rounded-md">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    How many development activities would you like per day?
                  </label>
                  <select className="w-full p-4 border border-gray-300 rounded-md">
                  <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    How many times should we ask you to fill out the
                    developmental assessment per child?
                  </label>
                  <select className="w-full p-4 border border-gray-300 rounded-md">
                  <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-8 py-3 rounded-md hover:bg-gray-500"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Step 4: File Upload */}
            <div className="w-full flex-shrink-0 p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Upload Required Documents:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 border border-gray-300 rounded-lg text-center">
                  <p className="text-gray-500">Upload Government-Issued ID</p>
                  <input type="file" className="mt-2 w-full" />
                </div>
                <div className="p-6 border border-gray-300 rounded-lg text-center">
                  <p className="text-gray-500">Upload Relevant Certificate</p>
                  <input type="file" className="mt-2 w-full" />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-8 py-3 rounded-md hover:bg-gray-500"
                >
                  ← Back
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSignup;
