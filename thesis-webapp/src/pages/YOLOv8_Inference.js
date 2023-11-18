import Sidebar from "../components/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";

const Yolov8Inference = () => {
  const location = useLocation();

  return (
    <div className="w-screen h-screen bg-customBackground overflow-hidden">
      <Sidebar activePage={location.pathname} />
    </div>
  );
};

export default Yolov8Inference;
