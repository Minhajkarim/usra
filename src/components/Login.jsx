import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For holding error messages
  const navigate = useNavigate(); // React Router's navigation hook

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Clear any previous errors
    setError("");

    // Check for empty fields
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    // Send login request to the backend
    const response = await fetch("http://localhost/usra-dashboard-backend/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Inform the backend it's receiving JSON
      },
      body: JSON.stringify({ username, password }), // Send data as JSON
    });

    // Wait for the backend's response
    const data = await response.json();

    // Handle backend response
    if (data.success) {
      // Navigate to the dashboard after a successful login
      navigate("/dashboard");
    } else {
      // Set the error message if login failed
      setError(data.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Display error message if any */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Set username state
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password state
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <a href="/register" className="text-blue-500">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
