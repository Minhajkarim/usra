import React from "react";
import { FaPlay, FaHeart } from "react-icons/fa";

const RecentlyWatched = () => {
  const videos = [
    { id: 1, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKssfEH2SFxrn-_YINNAASUdm33mth7vmsw&s", title: "Video 1" },
    { id: 2, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKssfEH2SFxrn-_YINNAASUdm33mth7vmsw&s", title: "Video 2" },
    { id: 3, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKssfEH2SFxrn-_YINNAASUdm33mth7vmsw&s", title: "Video 3" },
    { id: 4, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKssfEH2SFxrn-_YINNAASUdm33mth7vmsw&s", title: "Video 4" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Recently Watched</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
          >
            {/* Video Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaPlay className="text-white text-2xl" />
            </div>

            {/* Favorite Icon */}
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100">
              <FaHeart className="text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyWatched;
