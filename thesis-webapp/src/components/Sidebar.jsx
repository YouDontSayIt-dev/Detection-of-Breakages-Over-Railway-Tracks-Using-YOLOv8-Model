import React, { useState } from "react";
import { Menu, ChevronLeft, ChevronDown } from "react-feather";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png";

const Sidebar = ({ activePage }) => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsible(!isCollapsible);
    setShowSubOptions(false);
  };

  const toggleSubOptions = () => {
    setShowSubOptions(!showSubOptions);
  };

  // FUNCTION FOR RENDERING THE TITLE OF THE SIDEBAR AND THE RIGHT ICON (MENU OR ARROW)
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
        <div className="flex rounded-tr-customSidebar">
          <div className="w-[80%] text-ebony text-justify text-shadow-md text-2xl font-bold mt-9 ml-6">
          <NavLink to="/">BREAKAGE DETECT</NavLink>
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
    <div className="fixed h-full z-50">
      <div
        className={`flex flex-col h-full  bg-customSidebarColor rounded-br-customSidebar rounded-tr-customSidebar text-white z-50 ${
          isCollapsible ? "w-0" : "w-[335px]"
        } transition-all duration-500 ease-out`}
      >
        {/* FOR RENDERING THE TITLE COMPONENT */}
        <div className="rounded-tr-customSidebar">
          {renderTitle()}
        </div>

        <div className="font-Poppins text-base text-ebony mt-14">
          {!isCollapsible && (
            <>
              {/* LINK FOR YOLOV8 MODEL */}
              <div
                className={
                  activePage === "/yolov8/inference" ||
                  activePage === "/yolov8/realtime"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
                onClick={toggleSubOptions}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                >
                  <path
                    d="M7 0C3.5 0 0 0.421053 0 3.36842V11.3684C0 12.1501 0.322655 12.8998 0.896986 13.4525C1.47132 14.0053 2.25027 14.3158 3.0625 14.3158L1.75 15.5789V16H3.70125L5.45125 14.3158H8.75L10.5 16H12.25V15.5789L10.9375 14.3158C11.7497 14.3158 12.5287 14.0053 13.103 13.4525C13.6773 12.8998 14 12.1501 14 11.3684V3.36842C14 0.421053 10.8675 0 7 0ZM3.0625 12.6316C2.7144 12.6316 2.38056 12.4985 2.13442 12.2616C1.88828 12.0247 1.75 11.7034 1.75 11.3684C1.75 11.0334 1.88828 10.7121 2.13442 10.4752C2.38056 10.2383 2.7144 10.1053 3.0625 10.1053C3.4106 10.1053 3.74444 10.2383 3.99058 10.4752C4.23672 10.7121 4.375 11.0334 4.375 11.3684C4.375 11.7034 4.23672 12.0247 3.99058 12.2616C3.74444 12.4985 3.4106 12.6316 3.0625 12.6316ZM6.125 6.73684H1.75V3.36842H6.125V6.73684ZM7.875 6.73684V3.36842H12.25V6.73684H7.875ZM10.9375 12.6316C10.5894 12.6316 10.2556 12.4985 10.0094 12.2616C9.76328 12.0247 9.625 11.7034 9.625 11.3684C9.625 11.0334 9.76328 10.7121 10.0094 10.4752C10.2556 10.2383 10.5894 10.1053 10.9375 10.1053C11.2856 10.1053 11.6194 10.2383 11.8656 10.4752C12.1117 10.7121 12.25 11.0334 12.25 11.3684C12.25 11.7034 12.1117 12.0247 11.8656 12.2616C11.6194 12.4985 11.2856 12.6316 10.9375 12.6316Z"
                    fill={
                      activePage === "/yolov8/inference" ||
                      activePage === "/yolov8/realtime"
                        ? "#228A88"
                        : "#EBEBEB"
                    }
                  />
                </svg>

                <h1
                  className={
                    activePage === "/yolov8/inference" ||
                    activePage === "/yolov8/realtime"
                      ? "text-active mr-[110px]"
                      : "text-ebony mr-[110px]"
                  }
                >
                  YOLOV8 Model
                </h1>
                <ChevronDown
                  size={24}
                  color={
                    activePage === "/yolov8/inference" ||
                    activePage === "/yolov8/realtime"
                      ? "#228A88"
                      : "#EBEBEB"
                  }
                  className={
                    showSubOptions
                      ? "rotate-180 transition-all ease-in-out duration-300 text-active"
                      : "transition-all ease-out duration-300"
                  }
                />
              </div>
              {/* SUB OPTIONS FOR YOLOV8  */}
              {showSubOptions && (
                // INFERENCE MODE
                <div className="flex flex-col items-start">
                  <div
                    className={
                      activePage === "/yolov8/inference"
                        ? "flex w-full h-[56px] bg-customSubOption text-active cursor-pointer p-4 pl-14"
                        : "flex w-full h-[56px] cursor-pointer p-4 pl-14"
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                    >
                      <path
                        d="M14.5455 11.6364H4.36364V1.45455H14.5455M14.5455 0H4.36364C3.97787 0 3.6079 0.153246 3.33512 0.426027C3.06234 0.698807 2.90909 1.06878 2.90909 1.45455V11.6364C2.90909 12.0221 3.06234 12.3921 3.33512 12.6649C3.6079 12.9377 3.97787 13.0909 4.36364 13.0909H14.5455C14.9312 13.0909 15.3012 12.9377 15.574 12.6649C15.8468 12.3921 16 12.0221 16 11.6364V1.45455C16 1.06878 15.8468 0.698807 15.574 0.426027C15.3012 0.153246 14.9312 0 14.5455 0ZM1.45455 2.90909H0V14.5455C0 14.9312 0.153246 15.3012 0.426027 15.574C0.698807 15.8468 1.06878 16 1.45455 16H13.0909V14.5455H1.45455M10.88 6.75636L8.88 9.33091L7.45455 7.61455L5.45455 10.1818H13.4545L10.88 6.75636Z"
                        fill={
                          activePage === "/yolov8/inference"
                            ? "#228A88"
                            : "#EBEBEB"
                        }
                      />
                    </svg>
                    <NavLink to={"/yolov8/inference"}>Inference Mode</NavLink>
                  </div>

                  {/* REAL TIME MODE */}
                  <div
                    className={
                      activePage === "/yolov8/realtime"
                        ? "flex w-full h-[56px] bg-customSubOption text-active cursor-pointer p-4 pl-14"
                        : "flex w-full h-[56px] cursor-pointer p-4 pl-14"
                    }
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                    >
                      <path
                        d="M15.3 1.77778H12.6055L11.05 0H5.95L4.3945 1.77778H1.7C1.24913 1.77778 0.81673 1.96508 0.497918 2.29848C0.179107 2.63187 0 3.08406 0 3.55556V14.2222C0 14.6937 0.179107 15.1459 0.497918 15.4793C0.81673 15.8127 1.24913 16 1.7 16H15.3C15.7509 16 16.1833 15.8127 16.5021 15.4793C16.8209 15.1459 17 14.6937 17 14.2222V3.55556C17 3.08406 16.8209 2.63187 16.5021 2.29848C16.1833 1.96508 15.7509 1.77778 15.3 1.77778ZM15.3 14.2222H1.7V3.55556H5.1425L6.698 1.77778H10.302L11.8575 3.55556H15.3V14.2222ZM8.5 4.44444C7.37283 4.44444 6.29183 4.9127 5.4948 5.74619C4.69777 6.57969 4.25 7.71015 4.25 8.88889C4.25 10.0676 4.69777 11.1981 5.4948 12.0316C6.29183 12.8651 7.37283 13.3333 8.5 13.3333C9.62717 13.3333 10.7082 12.8651 11.5052 12.0316C12.3022 11.1981 12.75 10.0676 12.75 8.88889C12.75 7.71015 12.3022 6.57969 11.5052 5.74619C10.7082 4.9127 9.62717 4.44444 8.5 4.44444ZM8.5 11.5556C7.8237 11.5556 7.1751 11.2746 6.69688 10.7745C6.21866 10.2744 5.95 9.59613 5.95 8.88889C5.95 8.18165 6.21866 7.50337 6.69688 7.00327C7.1751 6.50317 7.8237 6.22222 8.5 6.22222C9.1763 6.22222 9.82491 6.50317 10.3031 7.00327C10.7813 7.50337 11.05 8.18165 11.05 8.88889C11.05 9.59613 10.7813 10.2744 10.3031 10.7745C9.82491 11.2746 9.1763 11.5556 8.5 11.5556Z"
                        fill={
                          activePage === "/yolov8/realtime"
                            ? "#228A88"
                            : "#EBEBEB"
                        }
                      />
                    </svg>

                    <NavLink to={"/yolov8/realtime"}>Real-Time Mode</NavLink>
                  </div>
                </div>
              )}

              {/* LINK FOR VGG16 MODEL */}
              <div
                className={
                  activePage === "/vgg16"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                >
                  <path
                    d="M7 0C3.5 0 0 0.421053 0 3.36842V11.3684C0 12.1501 0.322655 12.8998 0.896986 13.4525C1.47132 14.0053 2.25027 14.3158 3.0625 14.3158L1.75 15.5789V16H3.70125L5.45125 14.3158H8.75L10.5 16H12.25V15.5789L10.9375 14.3158C11.7497 14.3158 12.5287 14.0053 13.103 13.4525C13.6773 12.8998 14 12.1501 14 11.3684V3.36842C14 0.421053 10.8675 0 7 0ZM3.0625 12.6316C2.7144 12.6316 2.38056 12.4985 2.13442 12.2616C1.88828 12.0247 1.75 11.7034 1.75 11.3684C1.75 11.0334 1.88828 10.7121 2.13442 10.4752C2.38056 10.2383 2.7144 10.1053 3.0625 10.1053C3.4106 10.1053 3.74444 10.2383 3.99058 10.4752C4.23672 10.7121 4.375 11.0334 4.375 11.3684C4.375 11.7034 4.23672 12.0247 3.99058 12.2616C3.74444 12.4985 3.4106 12.6316 3.0625 12.6316ZM6.125 6.73684H1.75V3.36842H6.125V6.73684ZM7.875 6.73684V3.36842H12.25V6.73684H7.875ZM10.9375 12.6316C10.5894 12.6316 10.2556 12.4985 10.0094 12.2616C9.76328 12.0247 9.625 11.7034 9.625 11.3684C9.625 11.0334 9.76328 10.7121 10.0094 10.4752C10.2556 10.2383 10.5894 10.1053 10.9375 10.1053C11.2856 10.1053 11.6194 10.2383 11.8656 10.4752C12.1117 10.7121 12.25 11.0334 12.25 11.3684C12.25 11.7034 12.1117 12.0247 11.8656 12.2616C11.6194 12.4985 11.2856 12.6316 10.9375 12.6316Z"
                    fill={activePage === "/vgg16" ? "#228A88" : "#EBEBEB"}
                  />
                </svg>

                <h1
                  className={
                    activePage === "/vgg16"
                      ? "text-active mr-[110px]"
                      : "text-ebony mr-[110px]"
                  }
                >
                  <NavLink to={"/vgg16"}>VGG16 Model</NavLink>
                </h1>
              </div>

              {/* LINK FOR INCEPTIONV3 MODEL */}
              <div
                className={
                  activePage === "/inceptionv3"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                >
                  <path
                    d="M7 0C3.5 0 0 0.421053 0 3.36842V11.3684C0 12.1501 0.322655 12.8998 0.896986 13.4525C1.47132 14.0053 2.25027 14.3158 3.0625 14.3158L1.75 15.5789V16H3.70125L5.45125 14.3158H8.75L10.5 16H12.25V15.5789L10.9375 14.3158C11.7497 14.3158 12.5287 14.0053 13.103 13.4525C13.6773 12.8998 14 12.1501 14 11.3684V3.36842C14 0.421053 10.8675 0 7 0ZM3.0625 12.6316C2.7144 12.6316 2.38056 12.4985 2.13442 12.2616C1.88828 12.0247 1.75 11.7034 1.75 11.3684C1.75 11.0334 1.88828 10.7121 2.13442 10.4752C2.38056 10.2383 2.7144 10.1053 3.0625 10.1053C3.4106 10.1053 3.74444 10.2383 3.99058 10.4752C4.23672 10.7121 4.375 11.0334 4.375 11.3684C4.375 11.7034 4.23672 12.0247 3.99058 12.2616C3.74444 12.4985 3.4106 12.6316 3.0625 12.6316ZM6.125 6.73684H1.75V3.36842H6.125V6.73684ZM7.875 6.73684V3.36842H12.25V6.73684H7.875ZM10.9375 12.6316C10.5894 12.6316 10.2556 12.4985 10.0094 12.2616C9.76328 12.0247 9.625 11.7034 9.625 11.3684C9.625 11.0334 9.76328 10.7121 10.0094 10.4752C10.2556 10.2383 10.5894 10.1053 10.9375 10.1053C11.2856 10.1053 11.6194 10.2383 11.8656 10.4752C12.1117 10.7121 12.25 11.0334 12.25 11.3684C12.25 11.7034 12.1117 12.0247 11.8656 12.2616C11.6194 12.4985 11.2856 12.6316 10.9375 12.6316Z"
                    fill={activePage === "/inceptionv3" ? "#228A88" : "#EBEBEB"}
                  />
                </svg>

                <h1
                  className={
                    activePage === "/inceptionv3"
                      ? "text-active mr-[110px]"
                      : "text-ebony mr-[110px]"
                  }
                >
                  <NavLink to={"/inceptionv3"}>InceptionV3 Model</NavLink>
                </h1>
              </div>

              {/* LINK FOR RESNET50 MODEL */}
              <div
                className={
                  activePage === "/resnet50"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                >
                  <path
                    d="M7 0C3.5 0 0 0.421053 0 3.36842V11.3684C0 12.1501 0.322655 12.8998 0.896986 13.4525C1.47132 14.0053 2.25027 14.3158 3.0625 14.3158L1.75 15.5789V16H3.70125L5.45125 14.3158H8.75L10.5 16H12.25V15.5789L10.9375 14.3158C11.7497 14.3158 12.5287 14.0053 13.103 13.4525C13.6773 12.8998 14 12.1501 14 11.3684V3.36842C14 0.421053 10.8675 0 7 0ZM3.0625 12.6316C2.7144 12.6316 2.38056 12.4985 2.13442 12.2616C1.88828 12.0247 1.75 11.7034 1.75 11.3684C1.75 11.0334 1.88828 10.7121 2.13442 10.4752C2.38056 10.2383 2.7144 10.1053 3.0625 10.1053C3.4106 10.1053 3.74444 10.2383 3.99058 10.4752C4.23672 10.7121 4.375 11.0334 4.375 11.3684C4.375 11.7034 4.23672 12.0247 3.99058 12.2616C3.74444 12.4985 3.4106 12.6316 3.0625 12.6316ZM6.125 6.73684H1.75V3.36842H6.125V6.73684ZM7.875 6.73684V3.36842H12.25V6.73684H7.875ZM10.9375 12.6316C10.5894 12.6316 10.2556 12.4985 10.0094 12.2616C9.76328 12.0247 9.625 11.7034 9.625 11.3684C9.625 11.0334 9.76328 10.7121 10.0094 10.4752C10.2556 10.2383 10.5894 10.1053 10.9375 10.1053C11.2856 10.1053 11.6194 10.2383 11.8656 10.4752C12.1117 10.7121 12.25 11.0334 12.25 11.3684C12.25 11.7034 12.1117 12.0247 11.8656 12.2616C11.6194 12.4985 11.2856 12.6316 10.9375 12.6316Z"
                    fill={activePage === "/resnet50" ? "#228A88" : "#EBEBEB"}
                  />
                </svg>

                <h1
                  className={
                    activePage === "/resnet50"
                      ? "text-active mr-[110px]"
                      : "text-ebony mr-[110px]"
                  }
                >
                  <NavLink to={"/resnet50"}>ResNet50 Model</NavLink>
                </h1>
              </div>

              {/* LINK FOR ABOUT US */}
              <div
                className={
                  activePage === "/aboutus"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] mt-1 mr-2 ml-5"
                >
                  <path
                    d="M7.2 5.6H8.8V4H7.2M8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM7.2 12H8.8V7.2H7.2V12Z"
                    fill={activePage === "/aboutus" ? "#228A88" : "#EBEBEB"}
                  />
                </svg>

                <h1
                  className={
                    activePage === "/aboutus"
                      ? "text-active mr-[110px]"
                      : "text-ebony mr-[110px]"
                  }
                >
                  <NavLink to={"/aboutus"}>About Us</NavLink>
                </h1>
              </div>

              {/* LINK FOR HOME */}
              <div className="flex h-[310px] rounded-br-3xl items-end justify-end ">
                <NavLink to={"/"}>
                  <img
                    src={homeIcon}
                    alt="home"
                    className="w-[32px] h-[32px] justify-end mr-6"
                  />
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
