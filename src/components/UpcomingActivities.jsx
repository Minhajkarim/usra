import React from "react";

const UpcomingActivities = () => {
  const activities = [
    { title: "Activity one", time: "07:00 PM - 08:00 PM" },
    { title: "Activity two", time: "07:00 PM - 08:00 PM" },
    { title: "Activity three", time: "07:00 PM - 08:00 PM" },
  ];

  return (
    <div className="p-3 rounded-lg max-w-[300px]">
      {/* Title */}
      <h3 className="text-base font-semibold mb-3 text-gray-800">
        Upcoming Activities
      </h3>

      {/* Activity List */}
      <ul>
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 mb-2 border rounded-lg border-gray-300 bg-white hover:bg-red-400"
          >
            {/* Activity Info */}
            <div>
              <p className="text-sm font-medium text-gray-700 hover:text-white">{activity.title}</p>
              <p className="text-xs text-gray-500 hover:text-white">{activity.time}</p>
            </div>

            {/* Menu Icon */}
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75v.008M12 12v.008m0 5.242v.008"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingActivities;
