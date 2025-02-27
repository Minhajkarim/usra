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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Go to next step
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit(); // Submit on last step
  };

  // Register another baby
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

  // Submit form
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    navigate("/dashboard"); // Redirect after successful signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Increased Container Width */}
      <div className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg overflow-hidden relative">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
          Parent Signup
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 space-x-8"
            style={{ transform: `translateX(-${(step - 1) * 105}%)` }}
          >
            {/* Step 1: Email & Password */}
            <div className="w-full flex-shrink-0 p-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-4 mb-6 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
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

            {/* Step 2: Parent Details */}
            <div className="w-full flex-shrink-0 p-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
              <select
                name="relation"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
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
                className="w-full p-4 mb-6 border border-gray-300 rounded-md"
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

            {/* Step 3: Baby Details */}
            <div className="w-full flex-shrink-0 p-6">
              <input
                type="text"
                name="babyName"
                placeholder="Baby's Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
              <select
                name="gender"
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
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
                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />

              <button
                onClick={addAnotherBaby}
                className="w-full bg-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-400 flex items-center justify-center gap-2 mb-4"
              >
                <Plus size={18} /> Register Another Baby
              </button>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-400 text-white px-8 py-3 rounded-md hover:bg-gray-500"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
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

export default ParentSignup;
