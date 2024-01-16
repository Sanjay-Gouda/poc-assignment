/* eslint-disable react/prop-types */

// import LineChart from "../Charts/barChart";
import Table from "../Table";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ChartDemo from "../Charts/lineChart";

const Preview = () => {
  const handleDrop = (results) => {
    console.log(results);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.dropp} ref={provided.innerRef}>
              <div
                className="flex justify-center gap-5 flex-col items-center w-[900px] h-[500px] bg-white rounded-lg shadow-md p-4 border-2 border-gray-50"
                style={{ border: "2px solid gray" }}
              >
                <div className="w-full flex gap-4">
                  <Draggable draggableId="1" key="1" index="1">
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="w-1/2 rounded-lg shadow-md"
                      >
                        <Table />
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="2" key="2" index="2">
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="w-1/2 rounded-lg shadow-md"
                      >
                        {/* <Table /> */}
                        {/* <LineChart /> */}
                        {/* <BarChart /> */}
                        <ChartDemo />
                      </div>
                    )}
                  </Draggable>
                </div>

                <Draggable draggableId="3" key="3" index="3">
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="w-full h-12 p-3 rounded-lg shadow-md"
                    >
                      {/* <Table /> */}
                      {/* <LineChart /> */}
                      {/* <BarChart /> */}
                      <p>Note</p>
                    </div>
                  )}
                </Draggable>
                {/* {selectedOption === "commentry" && (
                )} */}

                {/* <div className="w-8 h-full bg-gray-200 rounded-r-lg"></div> */}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Preview;
