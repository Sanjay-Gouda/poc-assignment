/* eslint-disable react/prop-types */
const PreviewContainer = ({ item, notes }) => {
  return (
    <>
      {/* <DragDropContext onDragEnd={handleDrop}> */}

      <div className="flex flex-wrap gap-4 w-full">
        <div
          className={`overflow-hidden w-full gap-4  items-start justify-center flex`}
        >
          {item}
        </div>

        <div className={`w-auto  p-3 rounded-lg  border-2 border-gray-200`}>
          <p>Note:{notes} </p>
        </div>
      </div>
    </>
  );
};

export default PreviewContainer;
