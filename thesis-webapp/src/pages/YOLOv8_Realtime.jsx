import Sidebar from "../components/Sidebar";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RealtimeDisplay from "../components/RealtimeDisplay";
import Header from "../components/Header-yolo";

const Yolov8Realtime = () => {
  

  const location = useLocation(); //gets the current path location

  // Read the theme from local storage on component mount
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(savedTheme || "light");

  // On mount or theme change, update the local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Update the class based on the theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log("Theme is: ", theme);
  }, [theme]);

  // To toggle between dark and light mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex flex-col w-full h-full bg-customBackground dark:bg-customLightBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header onThemeChange={handleThemeChange} theme={theme}>
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
