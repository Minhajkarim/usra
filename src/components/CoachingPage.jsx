import React from "react";

const coaches = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "John Doe",
    bio: "John is an experienced life coach specializing in personal growth and success strategies. His approach focuses on building confidence and resilience.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "Jane Smith",
    bio: "Jane is a certified fitness coach who has helped hundreds of people achieve their health and wellness goals. Her programs are designed to be motivating and sustainable.",
  },
];

const CoachingPage = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Coaching</h1>

        {/* Coaching Cards Section */}
        <div className="space-y-6">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="flex flex-col sm:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full sm:w-48 h-48 object-cover"
              />

              {/* Content Section */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                {/* Name and Bio */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-sm text-gray-600">{coach.bio}</p>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4">
                  <button className="bg-brown-500 text-white py-2 px-4 rounded-full hover:bg-teal-400 transition">
                    Explore
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition">
                    Real-Time Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
