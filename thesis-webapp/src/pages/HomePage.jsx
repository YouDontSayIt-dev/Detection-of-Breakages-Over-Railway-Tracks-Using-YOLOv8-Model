import React from "react";
import { Link } from "react-router-dom";
import HomePageButton from "../components/HomePageButton";
import camera from "../assets/camera.svg";
import train from "../assets/train.png";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-Open bg-customBackground relative">
      <div className="w-full lg:w-3/5 px-3 lg:px-28 pt-[20px] lg:pt-[100px]">
        <div>
          <h2 className="text-[#EBEBEB] font-bold text-base text-center lg:text-left lg:text-[56px] lg:pb-4">
            WELCOME TO
          </h2>
          <div className="relative">
            <h1 className="text-[#EBEBEB] drop-shadow-2xl font-bold text-[40px] lg:text-9xl pb-8 lg:pb-4 text-center lg:text-justify  lg:whitespace-nowrap tracking-widest">
              RAIL DETECT
            </h1>

            <div className="absolute -top-5 right-0">
              <img src={camera} alt="camera" className="lg:w-[36px] lg:h-[32px]"></img>
            </div>
          </div>

          <div className="block lg:hidden w-full pb-4">
            <div className="">
              <img src={train} alt="train"></img>
            </div>
          </div>

          <div className="text-center lg:text-justify text-base lg:text-2xl w-full h-full">
            <p className="text-[#228A88] font-bold block pb-4 tracking-widest lg:whitespace-nowrap">
              Detection of Breakages Over Railway Tracks Using YOLOv8 Model
            </p>
            <p className="text-[#EBEBEB] text-[8px] lg:text-2xl leading-normal pb-8 lg:pb-16">
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
        <HomePageButton >
          <Link to="/yolov8/inference">Get Started</Link>
        </HomePageButton>
        </div>
      </div>

      <div className="hidden lg:block w-full lg:w-2/5 lg:relative lg:overflow-hidden">
        <div className="lg:absolute lg:-bottom-20 lg:-right-20">
          <img src={train} alt="train" ></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
