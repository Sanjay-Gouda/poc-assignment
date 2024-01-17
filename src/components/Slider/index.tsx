import React, { useContext } from "react";
import ChartDemo from "../Charts/lineChart";
import LineChart from "../Charts/barChart";
import PieChart from "../Charts/pieChart";
import Slides from "./slides";
import { MockSlide } from "../../constants/mockslides";
import { dataContext } from "../../context/globalState";

const Slider = ({ onSlideChange }) => {
  const { addNewSlide } = useContext(dataContext);
  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center items-center cursor-pointer">
        {addNewSlide?.map((dt) => (
          <Slides {...dt} key={dt.id} />
        ))}
      </div>
    </>
  );
};

export default Slider;
