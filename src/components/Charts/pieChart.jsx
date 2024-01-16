import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = () => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30], // Dummy data percentages for each label
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // Red
          "rgba(54, 162, 235, 0.7)", // Blue
          "rgba(255, 206, 86, 0.7)", // Yellow
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-1/2">
      <Pie data={data} />;
    </div>
  );
};

export default PieChart;
