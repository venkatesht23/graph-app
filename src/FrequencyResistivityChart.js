import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ResistivityCountChart = () => {
  // Chart data
  const data = {
    labels: [7, 8], // X-axis: Resistivity values (7, 8)
    datasets: [
      {
        label: "Count", // Y-axis: Count
        data: [0, 10], // Corresponding count values for resistivity 7 (0) and 8 (10)
        borderColor: "rgba(75,192,192,1)", // Line color
        fill: false, // Disable fill below the line
        tension: 0.3, // Curve the line slightly
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show the legend
      },
      title: {
        display: true,
        text: "Resistivity vs Count", // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Resistivity (Ω·m)", // X-axis title
        },
        ticks: {
          stepSize: 1, // Adjust the step size for the X-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Count", // Y-axis title
        },
        min: 0, // Minimum value for count
        max: 100, // Maximum value for count
        ticks: {
          stepSize: 20, // Y-axis will have a step of 10 (multiple of 20)
          font: {
            weight: "bold", // Bold the Y-axis labels
          },
        },
        grid: {
          borderWidth: 2, // Make the Y-axis lines bold
          color: "rgba(0,0,0,0.8)", // Color for the Y-axis grid lines (darker color)
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ResistivityCountChart;
