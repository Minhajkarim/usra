import React from "react";

const Tracking = () => {
  const assessments = [
    {
      title: "Newborn Reflexes & Postures",
      status: "Completed",
      color: "green",
    },
    {
      title: "Babbling",
      status: "Completed",
      color: "green",
    },
    {
      title: "Social Development",
      status: "Pending",
      color: "red",
    },
    {
      title: "Object Exploration",
      status: "Pending",
      color: "red",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-blue-50 min-h-screen font-sans">
      {/* Assessments Timeline */}
      <div className="rounded-lg p-4 md:p-6 lg:p-8 mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
          Assessments
        </h2>
        <div className="relative">
          {/* Timeline Images */}
          <div className="flex justify-between items-center mb-6">
            <img
              src="./baby_step_1.png"
              alt="Step 1"
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <img
              src="./baby_step_2.png"
              alt="Step 2"
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <img
              src="./baby_step_3.png"
              alt="Step 3"
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <img
              src="./baby_step_4.png"
              alt="Step 4"
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
          </div>

          {/* Progress Bar */}
          <div className="relative">
            {/* Background Bar */}
            <div className="absolute inset-x-0 h-2 bg-gray-300 rounded-full"></div>

            {/* Completed Progress */}
            <div
              className="absolute inset-x-0 h-2 bg-blue-500 rounded-full"
              style={{ width: "25%" }}
            ></div>

            {/* Dots */}
            <div className="absolute inset-x-0 flex justify-between items-center top-1/2 -translate-y-1/2 z-10">
              <div className="w-6 h-6 md:w-6 md:h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 md:w-6 md:h-6 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-6 md:w-6 md:h-6 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-6 md:w-6 md:h-6 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        {assessments.map((assessment, index) => (
          <div
            key={index}
            className="bg-blue-200 shadow-md rounded-lg p-4 md:p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <img
              src="./assessment_icon.png"
              alt="Assessment Icon"
              className="h-12 w-12 md:h-16 md:w-16 mb-4"
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-700 mb-2 text-center">
              {assessment.title}
            </h3>
            <span
              className={`text-sm md:text-base font-medium mt-auto ${
                assessment.color === "green" ? "text-green-600" : "text-red-500"
              }`}
            >
              {assessment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;
