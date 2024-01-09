import React from "react";
import ChartDemo from "../Charts/lineChart";
import LineChart from "../Charts/barChart";

const Slider = ({ onSlideChange }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center items-center cursor-pointer">
        <div
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
          onClick={() => {
            onSlideChange("chart");
          }}
        >
          <div className="w-full">
            <ChartDemo />
          </div>
        </div>
        <div
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
          onClick={() => {
            onSlideChange("line");
          }}
        >
          <LineChart />
        </div>
        <div
          onClick={() => {
            onSlideChange("blank");
          }}
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
        >
          <p>Your content here</p>
        </div>
      </div>
    </>
  );
};

export default Slider;
