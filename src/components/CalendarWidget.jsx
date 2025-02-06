import React from "react";

const CalendarWidget = () => {
  const highlightedDates = {
    1: "bg-blue-500 text-white", // Blue for Jan 1
    12: "bg-green-500 text-white", // Green for Jan 12
    24: "bg-red-500 text-white", // Red for Jan 24
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[300px]">
      {/* Title */}
      <h3 className="text-base font-semibold mb-3 text-gray-800">January</h3>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="uppercase">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 text-center text-xs">
        {/* Empty placeholders for starting day (e.g., if Jan starts on a Sunday) */}
        {[...Array(0)].map((_, i) => (
          <div key={i}></div>
        ))}

        {/* Render Days */}
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              className={`p-1 flex items-center justify-center rounded-full ${
                highlightedDates[day] || "hover:bg-gray-100"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;
