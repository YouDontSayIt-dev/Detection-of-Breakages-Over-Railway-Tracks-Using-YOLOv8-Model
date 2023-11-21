import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RealtimeDisplay from "../components/RealtimeDisplay";

const Yolov8Realtime = () => {
  // FOR MODAL POPUP
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconHover = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const location = useLocation(); //gets the current path location

  return (
    <div className="flex flex-col w-full h-full bg-customBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <div className="w-full h-[120px] overflow-x-hidden">
        <div className="flex h-[30%] ml-[125px] items-center justify-between p-[56px]">
          {/* CONTAINER FOR TOP ITEMS  */}
          {/* LEFT ITEMS */}
          <div className="flex">
            <h1 className="text-4xl font-bold text-ebony">
              YOLOv8 Rail Detect
            </h1>
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4"
            >
              <path
                d="M32.4 3.55556H26.694L23.4 0H12.6L9.306 3.55556H3.6C2.64522 3.55556 1.72955 3.93016 1.05442 4.59695C0.379284 5.26375 0 6.16812 0 7.11111V28.4444C0 29.3874 0.379284 30.2918 1.05442 30.9586C1.72955 31.6254 2.64522 32 3.6 32H32.4C33.3548 32 34.2705 31.6254 34.9456 30.9586C35.6207 30.2918 36 29.3874 36 28.4444V7.11111C36 6.16812 35.6207 5.26375 34.9456 4.59695C34.2705 3.93016 33.3548 3.55556 32.4 3.55556ZM32.4 28.4444H3.6V7.11111H10.89L14.184 3.55556H21.816L25.11 7.11111H32.4V28.4444ZM18 8.88889C15.6131 8.88889 13.3239 9.82539 11.636 11.4924C9.94821 13.1594 9 15.4203 9 17.7778C9 20.1353 9.94821 22.3962 11.636 24.0632C13.3239 25.7302 15.6131 26.6667 18 26.6667C20.3869 26.6667 22.6761 25.7302 24.364 24.0632C26.0518 22.3962 27 20.1353 27 17.7778C27 15.4203 26.0518 13.1594 24.364 11.4924C22.6761 9.82539 20.3869 8.88889 18 8.88889ZM18 23.1111C16.5678 23.1111 15.1943 22.5492 14.1816 21.549C13.1689 20.5488 12.6 19.1923 12.6 17.7778C12.6 16.3633 13.1689 15.0067 14.1816 14.0065C15.1943 13.0063 16.5678 12.4444 18 12.4444C19.4322 12.4444 20.8057 13.0063 21.8184 14.0065C22.8311 15.0067 23.4 16.3633 23.4 17.7778C23.4 19.1923 22.8311 20.5488 21.8184 21.549C20.8057 22.5492 19.4322 23.1111 18 23.1111Z"
                fill="#228A88"
              />
            </svg>
          </div>

          {/* RIGHT ITEMS */}
          <div className="flex">
            <div onMouseEnter={handleIconHover}>
              <svg
                width="56"
                height="54"
                viewBox="0 0 56 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M25.2 18.9H30.8V13.5H25.2M28 48.6C15.652 48.6 5.6 38.907 5.6 27C5.6 15.093 15.652 5.4 28 5.4C40.348 5.4 50.4 15.093 50.4 27C50.4 38.907 40.348 48.6 28 48.6ZM28 0C24.323 0 20.682 0.698376 17.2849 2.05525C13.8877 3.41213 10.8011 5.40094 8.20101 7.90812C2.94999 12.9716 0 19.8392 0 27C0 34.1608 2.94999 41.0284 8.20101 46.0919C10.8011 48.5991 13.8877 50.5879 17.2849 51.9448C20.682 53.3016 24.323 54 28 54C35.4261 54 42.548 51.1554 47.799 46.0919C53.05 41.0284 56 34.1608 56 27C56 23.4543 55.2758 19.9433 53.8686 16.6675C52.4615 13.3918 50.399 10.4153 47.799 7.90812C45.1989 5.40094 42.1123 3.41213 38.7151 2.05525C35.318 0.698376 31.677 0 28 0ZM25.2 40.5H30.8V24.3H25.2V40.5Z"
                  fill="#EBEBEB"
                />
              </svg>
            </div>

            {/* MODAL POPUP */}
            {isModalOpen && (
              <div
                className="absolute top-[84px] right-20 z-50 w-[531px] h-[515px] bg-customSidebarColor rounded-customPopUp p-8 text-ebony"
                onMouseLeave={handleModalClose}
              >
                <h1 className="w-full h-[10%] text-2xl font-semibold">
                  What is Inferencing?
                </h1>
                <p className="w-full h-[80%] py-4 text-2xl">
                  Inferencing refers to the process of using a trained model to
                  make predictions or inferences on new, unseen data. Object
                  detection involves identifying and locating objects within an
                  image or a video frame. The trained model, often based on
                  machine learning or deep learning techniques, has learned to
                  recognize patterns and features that distinguish different
                  objects.
                </p>
                <div className="flex items-center justify-end w-full text-2xl">
                  <h1>Model's Accuracy: </h1>
                  <h1 className="font-semibold text-4xl mb-4 ml-4">92%</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-screen h-full justify-center mb-2 overflow-x-hidden z-10">
        {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
        <div className="flex flex-col w-[1186px] h-fit mx-auto border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay">
          <RealtimeDisplay modelName="railway-crack-detection" modelVersion="10"/>
        </div>
      </div>
    </div>
  );
};

export default Yolov8Realtime;
