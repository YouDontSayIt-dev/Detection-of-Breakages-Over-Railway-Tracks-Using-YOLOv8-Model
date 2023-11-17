import React, { useState } from "react";
import { Menu, ChevronLeft, ChevronDown } from "react-feather";
import trainIcon from "../assets/trainIcon.png";
import { NavLink } from "react-router-dom";
import aboutIcon from "../assets/aboutIcon.png";

const Sidebar = () => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsible(!isCollapsible);
    setShowSubOptions(false);
  };

  const toggleSubOptions = () => {
    setShowSubOptions(!showSubOptions);
  };

  const renderTitle = () => {
    if (isCollapsible) {
      return (
        <div className="cursor-pointer mt-10 ml-8" onClick={toggleCollapsible}>
          {isCollapsible ? (
            <Menu size={30} color="white" />
          ) : (
            <ChevronLeft size={30} color="white" />
          )}
        </div>
      );
    } else {
      return (
        <div className="flex">
          <div className="w-[80%] text-ebony text-justify text-shadow-md text-3xl font-bold mt-9 ml-6">
            RAIL DETECT
          </div>
          <div
            className="w-[20%] flex justify-end cursor-pointer text-center mt-10 mr-8"
            onClick={toggleCollapsible}
          >
            {isCollapsible ? (
              <Menu size={30} color="white" />
            ) : (
              <ChevronLeft size={30} color="white" />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`flex flex-col h-screen bg-customSidebarColor text-white rounded-tr-3xl rounded-br-3xl ${
        isCollapsible ? "w-0" : "w-[335px]"
      } transition-all duration-500`}
    >
      <div className="bg-customSidebarColor rounded-tr-3xl">
        {renderTitle()}
      </div>

      <div className="font-Poppins text-base text-ebony mt-14">
        {!isCollapsible && (
          <>
            <div
              className="flex flex-grow p-2 ml-5 space-x-[110px] cursor-pointer"
              onClick={toggleSubOptions}
            >
              <img
                src={trainIcon}
                alt="trainIcon"
                className="w-[16px] h-[16px] mt-1 mr-2"
              />
              YOLOV8 Model
              <ChevronDown
                size={24}
                color="white"
                className={
                  showSubOptions
                    ? "rotate-180 transition-all ease-in-out duration-300"
                    : "transition-all ease-out duration-300"
                }
              />
            </div>
            {showSubOptions && (
              <div className="flex flex-col items-start pt-2">
                <div className="w-full cursor-pointer p-2 pl-14 mb-2 hover:bg-customSubOption hover:text-active">
                  Inference Mode
                </div>
                <div className="w-full cursor-pointer p-2 pl-14 mb-2 hover:bg-customSubOption hover:text-active">
                  Real-time Mode
                </div>
              </div>
            )}
            <div className="flex ml-5 cursor-pointer p-2 mb-2 mt-8">
              <img
                src={trainIcon}
                alt="trainIcon"
                className="w-[16px] h-[16px] mt-1 mr-2"
              />
              <NavLink to={"/vgg16"}>VGG16 Model</NavLink>
            </div>
            <div className="flex ml-5 cursor-pointer p-2 mb-2 mt-8">
              <img
                src={trainIcon}
                alt="trainIcon"
                className="w-[16px] h-[16px] mt-1 mr-2"
              />
              <NavLink to={"/inceptionv3"}>Inceptionv3 Model</NavLink>
            </div>
            <div className="flex ml-5 cursor-pointer p-2 mb-2 mt-8">
              <img
                src={trainIcon}
                alt="trainIcon"
                className="w-[16px] h-[16px] mt-1 mr-2"
              />
              <NavLink to={"/resnet50"}>ResNet50 Model</NavLink>
            </div>
            <div className="flex ml-5 cursor-pointer p-2 mb-2 mt-8">
              <img
                src={aboutIcon}
                alt="aboutIcon"
                className="w-[16px] h-[16px] mt-1 mr-2"
              />
              <NavLink to={"/aboutus"}>About Us</NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
