import { createContext, useState } from "react";
import { MockSlide } from "../constants/mockslides";

export const dataContext = createContext();

const GlobalState = ({ children }) => {
  const [slideId, setSlideId] = useState();
  const [addNewSlide, setAddNewSlide] = useState([...MockSlide]);
  const [comment, setComment] = useState([]);
  const [chart, setChart] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const [selectedSlideName, setSelectedSlideName] = useState("");

  return (
    <dataContext.Provider
      value={{
        slideId,
        setSlideId,
        addNewSlide,
        setAddNewSlide,
        comment,
        setComment,
        chart,
        setChart,
        showPreview,
        setShowPreview,
        selectedSlideName,
        setSelectedSlideName,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default GlobalState;
