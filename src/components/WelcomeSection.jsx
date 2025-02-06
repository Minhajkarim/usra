import React from "react";

const WelcomeSection = () => {
  return (
    <div className="bg-blue-500 p-6 rounded-lg shadow-lg flex items-center justify-between overflow-visible">
      {/* Left Section - Text */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Hello Dad,</h1>
        <p className="text-sm text-white leading-relaxed max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore.
        </p>
      </div>

      {/* Right Section - Illustration */}
      <div className="relative flex items-center justify-center overflow-visible">
        {/* Illustration */}
        <div className="p-2 rounded-full overflow-visible">
          <img
            src="./dashboard-img.png"
            alt="Baby Illustration"
            className="w-24 h-24 object-cover"
          />
        </div>
        {/* Star Icon */}
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="text-yellow-400 text-2xl font-bold">★</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
