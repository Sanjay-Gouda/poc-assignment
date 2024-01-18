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
import EditSlide from "./editSlide";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
    selectedSlideName,
  } = useContext(dataContext);

  console.log(chart);
  const randomId = useRandomID();
  const [slideDetail, setSlideDetail] = useState("");
  const [selectedSlide, setSelecteSlide] = useState([]);
  const handleSildePreview = (name) => {
    console.log(name);
    setSlideDetail(name);
  };
  const [open, setOpen] = useState(false);
  const [openTextModal, setOpenTextModal] = useState(false);

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

  const handleDrop = (result) => {
    const { type, destination, source } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reOrderCharts = [...chart];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedItem] = reOrderCharts.splice(sourceIndex, 1);
      reOrderCharts.splice(destinationIndex, 0, removedItem);
      console.log(reOrderCharts);
      setChart(reOrderCharts);
    }
  };

  return (
    <>
      <div className="w-full shadow-md  px-6 py-1 fixed z-50 bg-white top-0 ">
        <div className="flex justify-between items-center">
          <div className="flex  gap-2 ">
            <div className="w-14 h-14">
              <img src={Logo} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {selectedSlideName || "Weekly Business Report"}
              </h3>
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
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
            <button
              onClick={addNewSlidePreview}
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Add New Slide
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 mt-16">
        <div className="w-[20%] p-3 h-[92vh] border-2 overflow-auto ">
          <Slider onSlideChange={(name) => handleSildePreview(name)} />
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center ">
          {showPreview ? (
            <div className="flex justify-start gap-5 flex-col items-start overflow-hidden w-[900px] h-[600px] bg-white rounded-lg shadow-md  border border-gray-500">
              <div className=" p-2  bg-blue-500 text-white w-full">
                <p className="font-semibold">Q3 ARP Gap update</p>
              </div>
              {/* <div className="p-4 w-full flex flex-wrap">
                {chart?.map((item, ind) => (
                  <div key={ind} className="flex  gap-4 w-1/2">
                    <div
                      className={`overflow-hidden w-full  items-start justify-center flex`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              {comment !== "" && (
                <div className="w-auto h-12 p-3 rounded-lg shadow-md border-2 border-gray-200">
                  <p>Note:{comment} </p>
                </div>
              )} */}
              <EditSlide
                chart={chart}
                comment={comment}
                handleDrop={handleDrop}
              />
              {/* <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="ROOT" type="group">
                  {(provided) => (
                    <div className="w-full">
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="p-4 w-full flex gap-4"
                      >
                        {chart.map((item, ind) => (
                          <Draggable
                            key={ind + "1"}
                            draggableId={ind + "1"}
                            index={ind}
                          >
                            {(provided) => (
                              <div
                                className="flex  w-1/2"
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                              >
                                <div
                                  className={`overflow-hidden w-full   items-start justify-center flex`}
                                >
                                  {item}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                      {comment !== "" && (
                        <div className=" p-3   ">
                          <p className="p-3 rounded-lg shadow-md border-2 border-gray-200">
                            Note:{comment}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </Droppable>
              </DragDropContext> */}
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
