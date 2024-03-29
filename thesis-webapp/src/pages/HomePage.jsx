/***************************************************************************************************
 * Program Title: Breakage Detect
 * Date Written: August 26, 2023 | Date Revised: February 2, 2024
 * 
 * Programmers:
 *   - Muyco, Mathew James P.
 *   - Blanco, James Luis B.
 *   - Libardo, Dominique R.
 *   - Haber, Jhon Mark B.
 * 
 * Where the Program Fits in the General System Designs:
 *   This program plays a pivotal role in detecting the presence or absence of breakages
 *   in the railways, contributing to the overall safety and maintenance of the railway systems.
 * 
 * Purpose:
 *   The objective of this program is to automate the railway inspection process by 
 *   incorporating the YOLOv8. This enhances efficiency and user-friendliness. Highlighting
 *   its cost-effectiveness and real-time accessibility through web and mobile devices.
 * 
 * Data Structures, Algorithms, and Control:
 *   - Data Structures:
 *        This program utilizes session storage that provides a way to organize and store data temporarily. 
 *        Each key-value pair stored in session storage is essentially a piece of data that can be retrieved
 *        and manipulated during the user's interaction with the web page.
 *   - Algorithms:
 *        This program primarily integrated YOLOv8 object detection algorithm and the three 
 *        known CNN algorithms namely, VGG-16, Inception V3, and ResNet-50. 
 *   - Control:
 *        (1) Image Data Acquisition - handle the image coming from the device's file or camera using the
 *            function "handleFileChange".
 *        (2) The YOLOv8 Algorithm - image will be stored in the "bboxdata" variable where it serves as 
 *            a container for the bounding box data obtained from the machine learning model's inference, 
 *            and it is also used to update the UI and display the results.
 *        (3) The CNN Models - image will pass through three CNN models to determine 
 *            the presence or absence of a railway breakage by the function called "sendImageToAPI". 
 *        (4) Popup Alert - a modal will be shown ensuring correct response. An if-else statement was used
 *            to determine whether there are breakages detected or none.
 *        (5) Error Handling - The .catch method was used to handle errors in case the axios request fails. 
 *            If there's an error during the API request, it will log the error message to the console.
 ****************************************************************************************************/

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageButton from "../components/HomePageButton";
import train from "../assets/train.png";
import ThemeModeBtn from "../components/ThemeModeBtn";

function HomePage() {
  // Read the theme from local storage on component mount
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(savedTheme);

  // On mount or theme change, update the local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Update the class based on the theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log("Theme changed to: ", theme);
  }, [theme]);

  // To toggle between dark and light mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex lg:flex-row min-h-screen font-Open [background:linear-gradient(0deg,rgba(34,138,136,0.5)_0%,rgba(7,16,23,0)_100%)] relative dark:bg-customLightBackground">
      <div className="w-full lg:w-3/5 px-3 lg:pl-32 pt-[20px] lg:pt-[200px]">
        <div>
          <div className="flex lg:hidden w-auto h-20 justify-end">
            <ThemeModeBtn onClick={handleThemeChange} theme={theme}/>
          </div>
          <h2 className="text-[#EBEBEB] font-bold text-base text-center lg:text-left md:text-2xl leading-normal lg:text-5xl md:pb-4">
            WELCOME TO
          </h2>

          <div className="flex w-full xl:w-[1030px] justify-center lg:justify-normal ">
            <h1 className="text-[#EBEBEB] relative drop-shadow-2xl [text-shadow:0px_0px_20px_#228a88] font-bold leading-none text-[37px] md:text-6xl lg:text-[90px] pb-8 lg:pb-4 text-center lg:text-justify tracking-widest">
              BREAKAGE DETECT
            </h1>
            <svg
              width="15"
              height="15"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 lg:ml-4 lg:h-[32px] lg:w-[36px]"
            >
              <path
                d="M32.4 3.55556H26.694L23.4 0H12.6L9.306 3.55556H3.6C2.64522 3.55556 1.72955 3.93016 1.05442 4.59695C0.379284 5.26375 0 6.16812 0 7.11111V28.4444C0 29.3874 0.379284 30.2918 1.05442 30.9586C1.72955 31.6254 2.64522 32 3.6 32H32.4C33.3548 32 34.2705 31.6254 34.9456 30.9586C35.6207 30.2918 36 29.3874 36 28.4444V7.11111C36 6.16812 35.6207 5.26375 34.9456 4.59695C34.2705 3.93016 33.3548 3.55556 32.4 3.55556ZM32.4 28.4444H3.6V7.11111H10.89L14.184 3.55556H21.816L25.11 7.11111H32.4V28.4444ZM18 8.88889C15.6131 8.88889 13.3239 9.82539 11.636 11.4924C9.94821 13.1594 9 15.4203 9 17.7778C9 20.1353 9.94821 22.3962 11.636 24.0632C13.3239 25.7302 15.6131 26.6667 18 26.6667C20.3869 26.6667 22.6761 25.7302 24.364 24.0632C26.0518 22.3962 27 20.1353 27 17.7778C27 15.4203 26.0518 13.1594 24.364 11.4924C22.6761 9.82539 20.3869 8.88889 18 8.88889ZM18 23.1111C16.5678 23.1111 15.1943 22.5492 14.1816 21.549C13.1689 20.5488 12.6 19.1923 12.6 17.7778C12.6 16.3633 13.1689 15.0067 14.1816 14.0065C15.1943 13.0063 16.5678 12.4444 18 12.4444C19.4322 12.4444 20.8057 13.0063 21.8184 14.0065C22.8311 15.0067 23.4 16.3633 23.4 17.7778C23.4 19.1923 22.8311 20.5488 21.8184 21.549C20.8057 22.5492 19.4322 23.1111 18 23.1111Z"
                fill="#228A88"
              />
            </svg>
          </div>

          {/* FOR SMALL DVC */}
          <div className="flex lg:hidden w-full justify-center items-center pb-4">
            <div className="w-[242px] h-[242px] md:w-fit md:h-fit">
              <img src={train} alt="train"></img>
            </div>
          </div>

          <div className="text-center lg:text-justify text-base md:text-2xl w-full xl:w-[930px] ">
            <p className="text-[#228A88] font-bold block pb-4 tracking-widest dark:text-[#EBEBEB]">
              Detection of Breakages Over Railway Tracks Using YOLOv8 Model
            </p>
            <p className="text-[#EBEBEB] text-sm md:text-2xl leading-normal w-full xl:w-[930px] pb-8 lg:pb-16">
              Our website offers a user-friendly platform where you can easily
              detect and report railway breakages by simply uploading an image.
              Using a cutting-edge model-based technology, we can efficiently
              detect railway breakages. Join us in making railways safer and
              more efficient and be part of the future. Together, we can help
              maintain the integrity of our railways and ensure the safety of
              commuters.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-normal items-center pb-9">
          <Link to="/yolov8/inference">
            <HomePageButton>Get Started</HomePageButton>
          </Link>
        </div>
      </div>

      {/* FOR LARGE DVC */}
      <div className="hidden lg:block w-full lg:w-2/5 lg:relative lg:overflow-hidden dark:bg-customLightBackground">
        <div className="flex w-auto h-20 justify-end mr-20 mt-10">
          <ThemeModeBtn onClick={handleThemeChange} theme={theme}/>
        </div>

        <div className="lg:absolute lg:-bottom-20 lg:-right-20">
          <img src={train} alt="train"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
