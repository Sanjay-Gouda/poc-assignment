const PreviewContainer = ({ item, notes, id }) => {
  return (
    <>
      <div>
        {/* <DragDropContext onDragEnd={handleDrop}> */}

        <div className="flex flex-wrap gap-4 w-full">
          <div
            className={`overflow-hidden w-full   items-center justify-center flex`}
          >
            {item}
          </div>

          <div className={`w-full h-12 p-3 rounded-lg shadow-md`}>
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
      </div>
    </>
  );
};

export default PreviewContainer;
