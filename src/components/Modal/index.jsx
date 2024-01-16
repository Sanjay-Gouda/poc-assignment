/* eslint-disable react/prop-types */
const StyledModal = ({ open, onClose }) => {
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
              <h3 className="text-lg font-semibold text-gray-900 ">Charts</h3>
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-gray-500 mb-4">Select your Chart:</p>
              <ul className="space-y-4 mb-4">
                <li>
                  <input
                    type="radio"
                    id="job-1"
                    name="job"
                    value="job-1"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="job-1"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Line Chart
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="job-2"
                    name="job"
                    value="job-2"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="job-2"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Bar Chart
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="job-3"
                    name="job"
                    value="job-3"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="job-3"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Pie Chart
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </label>
                </li>
              </ul>
              <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyledModal;
