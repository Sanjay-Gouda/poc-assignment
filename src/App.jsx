import "./App.css";
import Login from "./components/Login";

import "react-responsive-modal/styles.css";
import SelectPresentation from "./components/SelectPresentation";
import { Route, Routes } from "react-router-dom";
import SliderPreview from "./components/SlidePreview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/select-slide" element={<SelectPresentation />} />
        <Route path="/preview" element={<SliderPreview />} />
      </Routes>
    </>
  );
}

export default App;
