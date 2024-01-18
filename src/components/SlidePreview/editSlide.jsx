/* eslint-disable react/prop-types */
// import React from "react";

import { Resizable } from "re-resizable";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const EditSlide = ({ chart, comment, handleDrop }) => {
  const [size, setSize] = useState({ width: 600, height: 200 });
  const onResize = (event, { size }) => {
    setSize(size);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
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
                // <div className=" p-3 w-auto  ">
                //   <p className="p-3 rounded-lg shadow-md border-2 border-gray-200">
                //     Note:{comment}{" "}
                //   </p>
                // </div>
                <Resizable
                  size={size}
                  onResize={onResize}
                  draggableOpts={{ enableUserSelectHack: false }}
                >
                  <div className="p-3 w-auto">
                    <p className="p-3 rounded-lg shadow-md border-2 border-gray-200">
                      Note: {comment}
                    </p>
                  </div>
                </Resizable>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default EditSlide;
