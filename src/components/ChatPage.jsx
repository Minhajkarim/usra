import React, { useState } from "react";

const messages = [
  {
    id: 1,
    sender: "Alice",
    text: "Hey USRA, how are you doing today?",
    profilePicture: "./baby.jpg",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    sender: "USRA",
    text: "Hi Alice! I'm doing great, thanks for asking. How about you?",
    profilePicture: "./logo.png",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    sender: "Alice",
    text: "I'm good too! Just wanted to catch up and see if you're free this weekend?",
    profilePicture: "./baby.jpg",
    timestamp: "10:05 AM",
  },
  {
    id: 4,
    sender: "USRA",
    text: "Sure, I'd love to! Let's plan something fun. 😊",
    profilePicture: "./logo.png",
    timestamp: "10:07 AM",
  },
];

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Chat Container */}
      <div className="w-full h-full flex flex-col justify-between">
        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start ${
                message.sender === "Alice" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Profile Picture */}
              <img
                src={message.profilePicture}
                alt={message.sender}
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />

              {/* Message Content */}
              <div
                className={`max-w-[90%] p-4 rounded-lg shadow-md ${
                  message.sender === "USRA"
                    ? "bg-blue-100 text-blue-800 mr-4"
                    : "bg-gray-100 text-gray-800 ml-4"
                }`}
              >
                <p className="font-medium">{message.sender}</p>
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-500 mt-2">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputValue && (
            <button
              className="ml-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
              onClick={() => {
                // Handle sending the message (logic to be implemented)
                alert("Message sent: " + inputValue);
                setInputValue(""); // Clear the input field
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.94 2.94a1 1 0 011.32-.083l.094.083 12 12a1 1 0 01-1.32 1.497l-.094-.083-12-12a1 1 0 010-1.414zM2 11a1 1 0 01.117-1.993L2 9h12a1 1 0 01.993.883L15 10a1 1 0 01-.883.993L14 11H2zM12.292 4.293a1 1 0 011.32-.083l.094.083 5 5a1 1 0 01-1.32 1.497l-.094-.083-5-5a1 1 0 010-1.414z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
