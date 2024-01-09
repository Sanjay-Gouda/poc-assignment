import React from "react";

const RadioButton = ({ name, value, isChecked, handleChange }) => {
  return (
    <input
      // id="default-radio-2"
      type="radio"
      checked={isChecked}
      name={name}
      value={value}
      onChange={(e) => handleChange(e)}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
    />
  );
};

export default RadioButton;
