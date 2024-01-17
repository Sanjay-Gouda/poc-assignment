/* eslint-disable react/prop-types */
// import { SiBaremetrics } from "react-icons/si";

const Dropdown = ({ openModal, openTextModal }) => {
  const handleChange = (e) => {
    console.log(e.target.value == "matric");

    if (e.target.value == "matric") {
      openModal();
    } else if (e.target.value == "text") {
      openTextModal();
    }
  };

  return (
    <>
      <select
        // data-te-select-init
        onChange={handleChange}
        className="w-[20%] shadow-md border rounded-lg p-2 outline-none"
      >
        <option>Select Type</option>
        <option value="matric">Metric</option>
        <option value="text">Text</option>
        <option value="image">Image</option>
      </select>
    </>
  );
};

export default Dropdown;
