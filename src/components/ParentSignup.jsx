import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const ParentSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    relation: "",
    babyStatus: "",
    babyName: "",
    dob: "",
    gender: "",
    age: "",
    babies: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const addAnotherBaby = () => {
    setFormData((prev) => ({
      ...prev,
      babies: [
        ...prev.babies,
        { name: prev.babyName, dob: prev.dob, gender: prev.gender, age: prev.age },
      ],
      babyName: "",
      dob: "",
      gender: "",
      age: "",
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    navigate("/dashboard");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/parent1.svg')" }} // Add your correct SVG filename
    >
      {/* Logo in the top-left corner */}
      <img src="/logo.png" alt="Logo" className="absolute top-6 left-6 w-24" />

      {/* Signup Container */}
      <div
        className="w-full max-w-xl p-8 rounded-xl text-white relative flex flex-col items-center"
        style={{
          backgroundImage: "url('/Vector.png')", // Replace with your correct blue background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Parent Signup</h2>

        {/* Image between Title and Form Fields */}
  <img 
    src="/illustration.png" // Replace with your actual image path
    alt="Signup Illustration" 
    className="w-40 h-40 mb-4" // Adjust size as needed
  />

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 space-x-8"
            style={{ transform: `translateX(-${(step - 1) * 105}%)` }}
          >
            {/* Step 1: Email & Password */}
            <div className="w-full flex-shrink-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-4 mb-6 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Step 2: Parent Details */}
            <div className="w-full flex-shrink-0">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <select
                name="relation"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              >
                <option value="">I am a...</option>
                <option value="mom">Mom</option>
                <option value="dad">Dad</option>
                <option value="grandma">Grandma</option>
                <option value="grandpa">Grandpa</option>
                <option value="uncle">Uncle</option>
                <option value="auntie">Auntie</option>
                <option value="nanny">Nanny</option>
                <option value="other">Other</option>
              </select>
              <select
                name="babyStatus"
                className="w-full p-4 mb-6 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              >
                <option value="">My baby is...</option>
                <option value="here">Here</option>
                <option value="onTheWay">On the way</option>
              </select>
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Step 3: Baby Details */}
            <div className="w-full flex-shrink-0">
              <input
                type="text"
                name="babyName"
                placeholder="Baby's Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />
              <select
                name="gender"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              >
                <option value="">Baby's Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Baby's Age (in months)"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                required
              />

              <button
                onClick={addAnotherBaby}
                className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 flex items-center justify-center gap-2 mb-4"
              >
                <Plus size={18} /> Register Another Baby
              </button>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
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

export default ParentSignup;
