const PreviewContainer = ({ item, notes, id }) => {
  return (
    <>
      {/* <DragDropContext onDragEnd={handleDrop}> */}

      <div className="flex flex-wrap gap-4 w-full">
        <div
          className={`overflow-hidden w-full gap-4  items-start justify-center flex`}
        >
          {item}
        </div>

        <div className={`w-auto h-12 p-3 rounded-lg  border-2 border-gray-200`}>
          <p>Note:{notes} </p>
        </div>
        {/* <div className="w-full h-12 p-3 rounded-lg shadow-md">
                    <Resizable
                      defaultSize={{
                        width: "100%",
                      }}
                    >
                      <p>Note:{notes} </p>
                    </Resizable>
                  </div> */}
      </div>
      {/* </DragDropContext> */}
    </>
  );
};

export default PreviewContainer;
