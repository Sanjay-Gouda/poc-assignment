import "./App.css";

import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login";
import SlideSelector from "./pages/SlideSelector";
import Preview from "./pages/Preview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/select-slide" element={<SlideSelector />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
