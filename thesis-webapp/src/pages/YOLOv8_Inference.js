import Sidebar from "../components/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";

const Yolov8Inference = () => {
  const location = useLocation(); //gets the current path location

  return (
    <div className="flex w-screen h-screen bg-customBackground overflow-hidden">
      <Sidebar activePage={location.pathname} />
      <div className="w-[20%] h-screen bg-black"></div>
      <div className="w-[20%] h-screen bg-red-500"></div>
      <div className="w-[20%] h-screen bg-orange-500"></div>
      <div className="w-[20%] h-screen bg-green-500"></div>
      <div className="w-[20%] h-screen bg-blue-500"></div>
    </div>
  );
};

export default Yolov8Inference;
