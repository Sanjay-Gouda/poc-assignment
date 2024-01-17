import { useContext } from "react";
import { dataContext } from "../../context/globalState";

/* eslint-disable react/prop-types */
const Slides = ({ item, id, showPreview }) => {
  const { setSlideId, slideId, setShowPreview } = useContext(dataContext);

  const handleClick = (id) => {
    // console.log(id);
    setSlideId(id);
    setShowPreview(false);
  };

  // border-2 border-yellow-400
  return (
    <>
      <div
        onClick={() => handleClick(id)}
        className={`w-64 h-40 bg-white flex ${
          slideId === id ? "border-2 border-yellow-400" : ""
        }   flex-wrap cursor-pointer rounded-lg overflow-hidden shadow-md p-4 hover:outline outline-yellow-400`}
      >
        {item.map((dt, ind) => (
          <div
            key={ind}
            className="overflow-hidden  items-center justify-center flex w-full"
          >
            {dt}
          </div>
        ))}
      </div>
    </>
  );
};

export default Slides;
