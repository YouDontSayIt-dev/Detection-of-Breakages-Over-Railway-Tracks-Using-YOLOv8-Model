import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-row min-h-screen bg-[#001E04] font-Open relative">
      <div className="w-3/5 px-28 pt-[100px]">
        <div>
          <h2 className="text-[#EBEBEB] fonr-bold text-6xl pb-10">
            WELCOME TO
          </h2>
          <div className="flex flex-row align-middle relative">
            <h1 className="text-[#F19C1B] font-bold text-9xl pb-8 text-justify">
              RAIL DETECT
            </h1>

            <div className="absolute top-0 -right-10">
              <img src="img/camera.svg" alt="camera"></img>
            </div>
          </div>

          <div className="text-justify text-2xl w-full">
            <p className="text-[#E5C088]  font-bold text-center pb-4">
              Detection of Breakages Over Railway Tracks Using YOLOv8 Model
            </p>
            <p className="text-[#EBEBEB] pb-16">
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
        <HomePageButton>
          <Link to="/detect">Get Started</Link>
        </HomePageButton>
      </div>

      <div className="w-2/5 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20">
          <img src="img/train.png" alt="train"></img>
        </div>
      </div>
    </div>
  );
}

function HomePageButton(props) {
  return (
    <button className="text-2xl font-bold bg-[#3A623F] hover:bg-[#2c4a30]  border-4 border-[#F19C1B] rounded-full text-white px-2 py-1 shadow-[0_0_69px_3px_rgba(0,255,255,0.25)]">
      <div className="flex flex-row align-middle justify-center space-x-2">
        {props.children}
        <img src="img/angle-right.svg" alt="angle-right"></img>
      </div>
    </button>
  );
}

export default HomePage;