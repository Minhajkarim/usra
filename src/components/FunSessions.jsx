import React, { useState } from "react";

const FunSessions = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const events = [
    { date: 5, name: "Dissect a flower" },
    { date: 15, name: "Go on a bug hunt." },
    { date: 22, name: "Dance Class" },
  ];

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  // Create an array to represent the calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null); // Empty slots before the first day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Determine the background color based on the index
  const getBgColor = (index) => (index % 2 === 0 ? "bg-brown-500" : "bg-brown-900");

  return (
    <div className="p-6 bg-blue-50 min-h-screen font-sans">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Fun Session</h1>

      <div className="max-w-4xl mx-auto rounded-lg p-6">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            {monthNames[month]} {year}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevMonth}
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded"
            >
              &larr; Prev
            </button>
            <button
              onClick={handleNextMonth}
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded"
            >
              Next &rarr;
            </button>
          </div>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 gap-4 text-center font-medium text-gray-100 mb-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="bg-blue-500 rounded-md py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-4">
          {calendarDays.map((day, index) => {
            const event = events.find((event) => event.date === day);

            return (
              <div
                key={index}
                className={`p-4 border rounded-lg flex flex-col justify-between ${
                  day ? getBgColor(index) : ""
                }`}
              >
                {day && (
                  <>
                    <span className="text-lg md:text-xl font-bold text-black">{day}</span>
                    {event && (
                      <span className="text-sm text-black mt-2">{event.name}</span>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FunSessions;
