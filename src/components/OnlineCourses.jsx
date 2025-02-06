import React from "react";

const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1678138091332-432d4a1ac407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGh1bWJuYWlsfGVufDB8fDB8fHww",
    name: "Mastering React.js",
    topic: "Web Development",
    rating: 4.8,
    price: "$49.99",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Introduction to Python",
    topic: "Programming",
    rating: 4.6,
    price: "$39.99",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Photography Basics",
    topic: "Photography",
    rating: 4.9,
    price: "$29.99",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Digital Marketing 101",
    topic: "Marketing",
    rating: 4.7,
    price: "$19.99",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Advanced Excel Tips",
    topic: "Data Analysis",
    rating: 4.5,
    price: "$24.99",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Fitness for Beginners",
    topic: "Health & Wellness",
    rating: 4.4,
    price: "$14.99",
  },
];

const OnlineCourses = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Online Courses</h1>

        {/* Popular Videos Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Popular Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-blue-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-48 object-cover"
                />
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {video.name}
                  </h3>
                  <p className="text-sm text-white mb-2">Topic: {video.topic}</p>
                  <p className="text-sm text-white mb-2">{video.rating} ⭐⭐⭐⭐⭐</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-white mb-4">{video.price}</p>
                    <button className="bg-brown-500 text-black py-2 px-4 rounded-full hover:bg-teal-400 transition">
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended to Watch Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Recommended to Watch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id + 6} // To create unique keys for the second section
                className="bg-blue-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-48 object-cover"
                />
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {video.name}
                  </h3>
                  <p className="text-sm text-white mb-2">Topic: {video.topic}</p>
                  <p className="text-sm text-white mb-2">{video.rating} ⭐⭐⭐⭐⭐</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-white mb-4">{video.price}</p>
                    <button className="bg-brown-500 text-black py-2 px-4 rounded-full hover:bg-teal-400 transition">
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="bg-brown-500 text-black py-3 px-6 rounded-full text-lg hover:bg-teal-400 transition">
            Explore More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
