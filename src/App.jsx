import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview";
import Slider from "./components/Slider";
import ChartDemo from "./components/Charts/lineChart";
import LineChart from "./components/Charts/barChart";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RadioButton from "./components/RadioButton";

function App() {
  const [slideDetail, setSlideDetail] = useState("");

  const handleSildePreview = (name) => {
    console.log(name);
    setSlideDetail(name);
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className="w-full flex">
        <div className="w-[20%] p-3 h-screen border-2 ">
          <Slider onSlideChange={(name) => handleSildePreview(name)} />
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center">
          <button
            onClick={onOpenModal}
            className="bg-black text-white py-2 px-4 mb-4 rounded-md"
          >
            Add Content
          </button>

          {slideDetail === "chart" ? (
            <div className="flex justify-center gap-5 flex-col items-center w-[900px] h-[400px] bg-white rounded-lg shadow-md p-4">
              <div className="w-full">
                <ChartDemo />
              </div>
            </div>
          ) : slideDetail === "line" ? (
            <div className="flex justify-center gap-5 flex-col items-center w-[900px] h-[400px] bg-white rounded-lg shadow-md p-4">
              <div className="w-full">
                {/* <ChartDemo /> */}
                <LineChart />
              </div>
            </div>
          ) : (
            <Preview selectedOption={selectedValue} />
          )}
        </div>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-[450px] gap-6 flex flex-col justify-between">
          <h1 className="font-bold">Add Dynamic Content</h1>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between gap-2 ">
              <div className="w-1/2 p-2 flex gap-2 items-center bg-gray-100 rounded-lg">
                <RadioButton
                  name="matric"
                  value="matric"
                  // isChecked={selectedValue === "matric"}
                  handleChange={(e) => handleChange(e)}
                />
                <p>Matric</p>
              </div>
              <div className="w-1/2 p-2 flex gap-2 items-center bg-gray-100 rounded-lg">
                <RadioButton
                  name="commentry"
                  value="commentry"
                  // isChecked={selectedValue === "commentry"}
                  handleChange={(e) => handleChange(e)}
                />
                <p>Commentry</p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <button
              onClick={onCloseModal}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Add Content
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
