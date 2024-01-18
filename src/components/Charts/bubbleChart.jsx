import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  // Dummy data for the bubble chart
  const data = {
    datasets: [
      {
        label: "Dummy Bubbles",
        data: [
          { x: 10, y: 20, r: 10 }, // Dummy data for the first bubble
          { x: 30, y: 15, r: 15 }, // Dummy data for the second bubble
          { x: 20, y: 25, r: 8 }, // Dummy data for the third bubble
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red fill color
        borderColor: "rgba(255, 99, 132, 1)", // Red border color
      },
    ],
  };

  return (
    <div className="w-full">
      <Bubble data={data} />
    </div>
  );
};

export default BubbleChart;
