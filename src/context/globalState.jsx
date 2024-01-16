import { createContext, useState } from "react";

export const dataContext = createContext();

const GlobalState = ({ children }) => {
  const [slideId, setSlideId] = useState();
  //   const [addNewSlide,setAddNewSlide]=useState([]);
  return (
    <dataContext.Provider value={{ slideId, setSlideId }}>
      {children}
    </dataContext.Provider>
  );
};

export default GlobalState;
