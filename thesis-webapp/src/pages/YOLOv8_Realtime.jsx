import Sidebar from "../components/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";
import RealtimeDisplay from "../components/RealtimeDisplay";
import Header from "../components/Header";

const Yolov8Realtime = () => {
  

  const location = useLocation(); //gets the current path location

  return (
    <div className="flex flex-col w-full h-full bg-customBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header>
        Yolov8 Rail Detect
      </Header>


      <div className="flex w-fit h-fit justify-center mb-2 overflow-x-hidden z-10  border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay md:mx-auto mx-4">
        {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
        <RealtimeDisplay
          modelName="railway-crack-detection"
          modelVersion="10"
        />
      </div>
    </div>
  );
};

export default Yolov8Realtime;
