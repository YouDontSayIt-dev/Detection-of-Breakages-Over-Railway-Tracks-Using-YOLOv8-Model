import Sidebar from "../components/Sidebar";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RealtimeDisplay from "../components/RealtimeDisplay";
import Header from "../components/Header-yolo";

const Yolov8Realtime = () => {
  

  const location = useLocation(); //gets the current path location

  const [theme, setTheme] = useState("");

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  // Effect to handle applying the theme class to the document
  useEffect(() => {
    console.log("Theme changed:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col w-full h-full bg-customBackground dark:bg-customLightBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header onThemeChange={handleThemeChange}>
        Yolov8 Breakage Detect
      </Header>


      <div className="flex w-fit h-fit justify-center mb-2 overflow-x-hidden z-10  border-8 border-customImageDisplay dark:border-customLightImageDisplay dark:shadow-customLightShadow shadow-customImageDisplay rounded-customImageDisplay md:mx-auto mx-4">
        {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
        <RealtimeDisplay
          modelName="railway-crack-detection"
          modelVersion="15"
        />
      </div>
    </div>
  );
};

export default Yolov8Realtime;
