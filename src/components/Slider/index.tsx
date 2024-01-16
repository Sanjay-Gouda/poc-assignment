import React from "react";
import ChartDemo from "../Charts/lineChart";
import LineChart from "../Charts/barChart";
import PieChart from "../Charts/pieChart";
import Slides from "./slides";
import { MockSlide } from "../../constants/mockslides";

const Slider = ({ onSlideChange }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center items-center cursor-pointer">
        {MockSlide?.map((dt) => (
          <Slides {...dt} key={dt.id} />
        ))}

        {/* <div
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
          onClick={() => {
            onSlideChange("line");
          }}
        >
          <LineChart />
        </div>
        <div
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
          onClick={() => {
            onSlideChange("pie");
          }}
        >
          <PieChart />
        </div> */}
        {/* <div
          onClick={() => {
            onSlideChange("blank");
          }}
          className="w-64 h-40 bg-white rounded-lg shadow-md p-4"
        >
          <p>Your content here</p>
        </div> */}
      </div>
    </>
  );
};

export default Slider;
