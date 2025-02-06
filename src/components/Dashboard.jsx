import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import CalendarWidget from "./CalendarWidget";
import UpcomingActivities from "./UpcomingActivities";
import StatisticsSection from "./StatisticsSection";
import RecentlyWatched from "./RecentlyWatched";
import Tracking from "./Tracking";
import FunSessions from "./FunSessions";
import BlogsAndArticles from "./Blogs";
import OnlineCourses from "./OnlineCourses";
import CoachingPage from "./CoachingPage";
import ChatPage from "./ChatPage";

const Dashboard = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("dashboard");

  // Function to render the dynamic content
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            {/* Welcome Section */}
            <div className="flex-1 rounded-lg p-4 mb-6">
              <WelcomeSection />
            </div>

            {/* Statistics Section */}
            <div className="flex-1 rounded-lg p-4 mb-6">
              <StatisticsSection />
            </div>

            {/* Recently Watched Section */}
            <div className="rounded-lg p-4">
              <RecentlyWatched />
            </div>
          </div>
        );
      case "tracking":
        return <Tracking />; // Replace with actual Tracking component
      case "funSessions":
        return <FunSessions />; // Replace with actual Fun Sessions component
      case "blogs":
        return <BlogsAndArticles />; // Replace with actual Blogs component
      case "courses":
        return <OnlineCourses />; // Replace with actual Courses component
      case "coaching":
        return <CoachingPage />; // Replace with actual Coaching component
      case "chat":
        return <ChatPage />; // Replace with actual Chat component
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar selectedTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-blue-50">
        {/* Header - Always static */}
        <Header />

        {/* Main Content + Calendar + Upcoming Activities */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Dynamic Content */}
          <div className="flex-1">
            {renderContent()}
          </div>

          {/* Static Sections */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6">
            {/* Calendar Widget */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <CalendarWidget />
            </div>

            {/* Upcoming Activities */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <UpcomingActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
