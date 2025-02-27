import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import AuthPage from "./components/AuthPage";
import RegisterOptions from "./components/RegisterOptions";
import ParentSignup from "./components/ParentSignup";
import ExpertSignup from "./components/ExpertSignup";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex bg-blue-50">
        <div className="w-full"> {/* Keeping this for full width */}
          <Routes>
            {/* Default route redirects to AuthPage */}
            <Route path="/" element={<Navigate to="/auth" />} />
            
            {/* Authentication Routes */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registeras" element={<RegisterOptions />} />
            <Route path="/register/parent" element={<ParentSignup />} />
            <Route path="/register/expert" element={<ExpertSignup />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />

            {/* Catch-all for undefined routes */}
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
