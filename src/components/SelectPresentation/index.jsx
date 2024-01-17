import { useContext, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Tab from "./tab";
import Cards from "./cards";
import { MockFiles } from "../../constants/mockfiles";
import { dataContext } from "../../context/globalState";
import { useNavigate } from "react-router-dom";

const SelectPresentation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setSelectedSlideName } = useContext(dataContext);
  const [selectdFileId, setSelectedFileId] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSelectFile = (id) => {
    setSelectedFileId(id);
  };

  const handleSelect = () => {
    const file = MockFiles?.find((file, ind) => ind == selectdFileId);
    setSelectedSlideName(file.title);
    navigate("/preview");
  };

  return (
    <>
      <section className="bg-primary  w-full flex h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg border-2 border-gray-200 shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Select Presentation Template
                </h3>
              </div>
              <div className="w-full flex gap-3 items-center">
                <div
                  onClick={onOpenModal}
                  className="bg-gray-300 rounded-md font-medium w-1/2 p-4 cursor-pointer"
                >
                  Start From Existing Presentation
                </div>
                <div className="bg-gray-300 rounded-md font-medium w-1/2 p-4 cursor-pointer">
                  Create new Google Slide Presentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex w-[750px] flex-col gap-3 ">
          <h1 className="font-bold">Select a File</h1>
          <Tab />

          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">Files</p>

            <div className="flex flex-wrap gap-3 ">
              {MockFiles?.map((dt, ind) => (
                <Cards
                  title={dt.title}
                  key={ind}
                  image={dt.src}
                  id={ind}
                  selected={selectdFileId === ind}
                  handleSelectFile={(id) => handleSelectFile(id)}
                />
              ))}
            </div>

            <div>
              <button
                onClick={handleSelect}
                type="button"
                className="text-white w-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                Select
              </button>

              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectPresentation;
