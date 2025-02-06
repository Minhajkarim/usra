import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const StatisticsSection = () => {
  // Data for the Doughnut Chart
  const doughnutData = {
    labels: ["Physical", "Cognitive", "Linguistic", "Social & Emotional"],
    datasets: [
      {
        data: [17, 26, 25, 32], // Example data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Data for the Line Chart
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Activity",
        data: [65, 59, 80, 81],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Bluish background
        tension: 0.4,
      },
    ],
  };

  // Options for the Line Chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  // Options for the Doughnut Chart to display labels at the bottom
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',  // Places the legend at the bottom
        labels: {
          fontSize: 14,
          fontColor: '#333', // Adjust label color if needed
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
      {/* Achieved (Doughnut Chart) */}
      <div className="bg-white p-4 rounded-lg shadow w-[300px] h-[350px] mx-auto lg:mx-0">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Achieved</h3>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>

      {/* Activity (Line Chart) */}
      <div className="p-4 rounded-lg shadow w-full lg:w-[400px] h-[200px] mx-auto lg:mx-0">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Activity</h3>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default StatisticsSection;
