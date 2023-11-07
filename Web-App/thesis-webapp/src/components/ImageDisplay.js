import React from "react";
import camera from "../assets/camera.png";

const ImageDisplay = ({ selectedImage }) => {
  return (
    <div className="w-[55%] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-16 mr-28">
        <h1 className="text-custom-text-orange text-7xl font-bold">
          RAIL DETECT
        </h1>
        <img src={camera} alt="camera" className="w-10 h-9 mb-16 ml-7" />
      </div>
      {/* BOX 1 BEHIND */}
      <div className="w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border shadow-custom-box-shadow mt-10 mr-12 z-1"></div>
      {/* BOX 2 FRONT */}
      <div className="bg-custom-box-1 w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border-box-2 shadow-custom-box-shadow-2 mr-1 z-50 absolute top-72 overflow-hidden">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="user input"
            className="w-[640px] h-[640px]"
          />
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
