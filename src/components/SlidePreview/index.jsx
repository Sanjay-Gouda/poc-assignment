/* eslint-disable no-unused-vars */
// import React from 'react'

import { useContext, useEffect, useState } from "react";
import Slider from "../../components/Slider";
import ChartDemo from "../Charts/lineChart";
import LineChart from "../Charts/barChart";
import Preview from "../Preview";
import Modal from "react-responsive-modal";
import PieChart from "../Charts/pieChart";
import Logo from "../../assets/logo.png";
import Dropdown from "../Dropdown";
import StyledModal from "../Modal";
import Slides from "../Slider/slides";
import { dataContext } from "../../context/globalState";
import { MockSlide } from "../../constants/mockslides";

const SliderPreview = () => {
  const [slideDetail, setSlideDetail] = useState("");
  const [selectedSlide, setSelecteSlide] = useState([]);
  const handleSildePreview = (name) => {
    console.log(name);
    setSlideDetail(name);
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState("");

  const { slideId } = useContext(dataContext);

  useEffect(() => {
    const data = MockSlide.filter((dt) => dt.id === slideId);

    setSelecteSlide(data);
  }, [slideId]);

  return (
    <>
      <div className="w-full shadow  px-6 py-1 fixed z-50 bg-white top-0 ">
        <div className="flex justify-between items-center">
          <div className="flex  gap-2 ">
            <div className="w-14 h-14">
              <img src={Logo} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Weekly Business Review</h3>
            </div>
          </div>
          <div className="w-[60%] flex justify-center">
            <Dropdown openModal={onOpenModal} />
          </div>
          {/* <div className=" p-2 w-full shadow-md rounded border border-gray-50"></div> */}
          <div className="w-[20%]">
            <button
              onClick={onCloseModal}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 mt-16">
        <div className="w-[20%] p-3 h-screen border-2 ">
          <Slider onSlideChange={(name) => handleSildePreview(name)} />
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center ">
          {/* {slideDetail === "chart" ? (
            <div className="flex justify-center gap-5 flex-col items-center w-[900px] h-[400px] bg-white rounded-lg shadow-md p-4">
              <div className="w-full">
                <ChartDemo />
              </div>
            </div>
          ) : slideDetail === "line" ? (
            <div className="flex justify-center gap-5 flex-col items-center w-[900px] h-[400px] bg-white rounded-lg shadow-md p-4">
              <div className="w-full">
                <LineChart />
              </div>
            </div>
          ) : slideDetail === "pie" ? (
            <>
              <div className="flex justify-center gap-5 flex-col items-center w-[900px] h-[400px] bg-white rounded-lg shadow-md p-4">
                <div className="w-full overflow-hidden items-center justify-center flex">
                  <PieChart />
                </div>
              </div>
            </>
          ) : (
            <Preview selectedOption={selectedValue} />
          )} */}

          <div className="flex justify-start gap-5 flex-col items-start overflow-hidden w-[900px] h-[600px] bg-white rounded-lg shadow-md  border border-gray-500">
            <div className=" p-2  bg-blue-500 text-white w-full">
              <p className="font-semibold">Q3 ARP Gap update</p>
            </div>
            <div className="p-4 w-full flex">
              {selectedSlide?.map((dt) => (
                <div key={dt.id} className="flex flex-wrap gap-4 w-full">
                  <div
                    className={`overflow-hidden w-full   items-center justify-center flex`}
                  >
                    {dt.item}
                  </div>
                  <div className="w-full h-12 p-3 rounded-lg shadow-md">
                    <p>Note: {dt.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Modal open={open} onClose={onCloseModal} center>
        <div className="w-[450px] gap-6 flex flex-col justify-between">
          <h1 className="font-bold">Add Dynamic Content</h1>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between gap-2 ">
              <div className="w-1/2 p-2 flex gap-2 items-center bg-gray-100 rounded-lg">
                <RadioButton
                  name="matric"
                  value="matric"
                  // isChecked={selectedValue === "matric"}
                  handleChange={(e) => handleChange(e)}
                />
                <p>Matric</p>
              </div>
              <div className="w-1/2 p-2 flex gap-2 items-center bg-gray-100 rounded-lg">
                <RadioButton
                  name="commentry"
                  value="commentry"
                  // isChecked={selectedValue === "commentry"}
                  handleChange={(e) => handleChange(e)}
                />
                <p>Commentry</p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <button
              onClick={onCloseModal}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Add Content
            </button>
          </div>
        </div>
      </Modal> */}

      <StyledModal open={open} onClose={onCloseModal} />
    </>
  );
};

export default SliderPreview;
