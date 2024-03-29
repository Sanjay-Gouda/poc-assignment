import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartDemo = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef?.current.getContext("2d");

    // Sample data for the bar chart
    const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Sample Bar Chart",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="w-full border-2 border-gray-200">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartDemo;
