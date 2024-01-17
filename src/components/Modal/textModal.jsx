/* eslint-disable react/prop-types */
// import { useContext, useEffect } from "react";
// import { dataContext } from "../../context/globalState";

import { useContext, useState } from "react";
import { dataContext } from "../../context/globalState";

const TextModal = ({ open, onClose }) => {
  const { setComment } = useContext(dataContext);
  const [notes, setNotes] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setNotes(e.target.value);
  };

  const addComment = () => {
    setComment(notes);
    onClose();
  };

  return (
    <>
      <div
        id="select-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          open ? "block" : "hidden"
        } overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Add Comment
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="select-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close Modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 flex flex-col gap-4">
              {/* <p className="text-gray-500 mb-4">Select your Chart:</p> */}
              {/* <textarea cols="10" className="w-full" />
               */}

              <textarea
                id="message"
                rows="4"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
              ></textarea>

              <button
                onClick={addComment}
                className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextModal;
