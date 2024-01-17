/* eslint-disable no-unused-vars */
// import React from 'react'

import { useContext, useEffect, useId, useState } from "react";
import Slider from "../../components/Slider";
import ChartDemo from "../Charts/lineChart";
import LineChart from "../Charts/barChart";
import Preview from "../Preview";
import Modal from "react-responsive-modal";
import PieChart from "../Charts/pieChart";
import Logo from "../../assets/logo.png";
import Dropdown from "../Dropdown";
// import Dropdown from "../Dropdown";
import StyledModal from "../Modal";
import TextModal from "../Modal/textModal";
import Slides from "../Slider/slides";
import { dataContext } from "../../context/globalState";
import { MockSlide } from "../../constants/mockslides";
import { useRandomID } from "../../hooks/useRandomId";
import PreviewContainer from "./previewContainer";
import { Resizable } from "re-resizable";

const SliderPreview = () => {
  const {
    comment,
    chart,
    setComment,
    setChart,
    setShowPreview,
    showPreview,
    setAddNewSlide,
    addNewSlide,
  } = useContext(dataContext);
  const randomId = useRandomID();
  const [slideDetail, setSlideDetail] = useState("");
  const [selectedSlide, setSelecteSlide] = useState([]);
  const handleSildePreview = (name) => {
    console.log(name);
    setSlideDetail(name);
  };
  const [open, setOpen] = useState(false);
  const [openTextModal, setOpenTextModal] = useState(false);
  const [showNewSlide, setShowNewSlide] = useState(true);

  const handleOpenTextModal = () => {
    setOpenTextModal(true);
  };

  const handleCloseText = () => {
    setOpenTextModal(false);
  };

  const handleSave = () => {
    setAddNewSlide((prev) => [
      ...prev,
      {
        id: randomId,
        item: chart,
        notes: comment,
      },
    ]);
    setShowPreview(false);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { slideId } = useContext(dataContext);

  const addNewSlidePreview = () => {
    setShowPreview(true);
    setComment("");
    setChart([]);
  };

  useEffect(() => {
    const data = addNewSlide?.filter((dt) => dt.id === slideId);

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
            <Dropdown
              openModal={onOpenModal}
              openTextModal={handleOpenTextModal}
            />
          </div>
          {/* <div className=" p-2 w-full shadow-md rounded border border-gray-50"></div> */}
          <div className="w-[20%] flex gap-3">
            <button
              onClick={handleSave}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
            <button
              onClick={addNewSlidePreview}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Add New Slide
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 mt-16">
        <div className="w-[20%] p-3 h-screen border-2 overflow-auto ">
          <Slider onSlideChange={(name) => handleSildePreview(name)} />
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center ">
          {showPreview ? (
            <div className="flex justify-start gap-5 flex-col items-start overflow-hidden w-[900px] h-[600px] bg-white rounded-lg shadow-md  border border-gray-500">
              <div className=" p-2  bg-blue-500 text-white w-full">
                <p className="font-semibold">Q3 ARP Gap update</p>
              </div>
              <div className="p-4 w-full flex flex-wrap">
                {chart?.map((item, ind) => (
                  <div key={ind} className="flex  gap-4 w-1/2">
                    <div
                      className={`overflow-hidden   items-center justify-center flex`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              {comment !== "" && (
                <Resizable
                  defaultSize={{
                    width: "100%",
                  }}
                >
                  <div className="w-full h-12 p-3 rounded-lg shadow-md">
                    <p>Note:{comment} </p>
                  </div>
                </Resizable>
              )}
            </div>
          ) : (
            <div className="flex justify-start gap-5 flex-col items-start overflow-hidden w-[900px] h-[600px] bg-white rounded-lg shadow-md  border border-gray-500">
              <div className=" p-2  bg-blue-500 text-white w-full">
                <p className="font-semibold">Q3 ARP Gap update</p>
              </div>
              <div className="p-4 w-full flex">
                {selectedSlide?.map((dt) => (
                  <PreviewContainer key={dt.id} {...dt} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <TextModal open={openTextModal} onClose={handleCloseText} />

      <StyledModal open={open} onClose={onCloseModal} />
    </>
  );
};

export default SliderPreview;
