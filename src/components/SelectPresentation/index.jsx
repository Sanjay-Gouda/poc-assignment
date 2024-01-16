import { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Tab from "./tab";
import Cards from "./cards";
import { MockFiles } from "../../constants/mockfiles";

const SelectPresentation = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
                <Cards title={dt.title} key={ind} image={dt.src} />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectPresentation;
