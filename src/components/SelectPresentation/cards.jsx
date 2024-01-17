/* eslint-disable react/prop-types */
const Cards = ({ title, image, selected, handleSelectFile, id }) => {
  return (
    <>
      <div
        onClick={() => handleSelectFile(id)}
        className={`w-[178px] cursor-pointer bg-white rounded-md overflow-hidden shadow-md hover:outline outline-blue-500 ${
          selected ? "border-4 border-blue-400 hover:outline-none" : ""
        }`}
      >
        <img
          src={image}
          alt="Card Image"
          className="w-full h-40 object-cover"
        />
        <div className="p-2 flex gap-2 items-center">
          <div className="w-4 h-4">
            <img
              src="https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.presentation"
              alt="Card Image"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default Cards;
