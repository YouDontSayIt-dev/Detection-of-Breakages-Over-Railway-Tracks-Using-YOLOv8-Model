import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import ImageDisplay from "../components/ImageDisplayYOLO";
import axios from "axios";
import CrackDetectedModal from "../components/CrackDetectedModal";
import Header from "../components/Header-yolo";

const Yolov8Inference = () => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);

  const handleDetection = (value) => {
    setDetectionOccurred(value);
  };

  console.log("Detection Occurred:", detectionOccurred);

  // New state for modal visibility
  const [isCrackDetectedModalOpen, setCrackDetectedModalOpen] = useState(false);

  // Function to open/close the modal
  const handleCrackDetectedModalToggle = () => {
    setCrackDetectedModalOpen(!isCrackDetectedModalOpen);
  };

  // useEffect to open the modal when detection occurs
  useEffect(() => {
    if (detectionOccurred) {
      setCrackDetectedModalOpen(true);
    }
  }, [detectionOccurred]);

  // FOR RADIO BTN VALUE
  const [outputOption, setOutputOption] = useState("image");

  const handleRadioChange = (value) => {
    setOutputOption(value);
  };

  console.log("Current radio button value:", outputOption);

  const location = useLocation(); //gets the current path location

  const [base64Image, setBase64Image] = useState(null);
  const [isInfering, setIsInfering] = useState(false); // To disable the inference button while infering
  const [bboxData, setBboxData] = useState(null); // Store the bbox data in a hook

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64Image(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  const sendImageToAPI = async () => {
    if (base64Image) {
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/railway-crack-detection/2",
        params: {
          api_key: "j4oHBD3msAlUlJvXwsHz",
        },
        data: base64Image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          // if may response, convert response.data to JSON
          const bboxData = JSON.stringify(response.data);
          setBboxData(response.data); // Store bboxData in state
          setIsInfering(true); // Enable the inference button
          console.log(bboxData);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    } else {
      console.log("No valid image selected.");
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-customBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header>YOLOv8 Breakage Detect</Header>

      {/* CONTAINER FOR BUTTONS */}
      <div className=" flex flex-col lg:flex-row justify-center lg:space-x-[100px] items-center z-10 mx-6">
        <div className="order-1 mb-[48px]">
          <UploadButton onChange={handleFileChange} />
        </div>

        <div className="order-2 mb-[48px]">
          <RadioInput
            selectedValue={outputOption}
            onRadioChange={handleRadioChange}
          />
        </div>

        <div className="order-4  mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} />
        </div>

        <div className="order-3 lg:hidden mb-8">
          {/* FOR MOBULE VERSION*/}
          {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
          <div className="flex w-screen h-fit mb-2 overflow-x-hidden z-0">
            <ImageDisplay
              selectedImage={base64Image}
              drawLine={isInfering}
              bboxData={bboxData}
              radioBtnValue={outputOption}
              onDetection={handleDetection}
            />
          </div>
        </div>
      </div>

      {/* FOR DESKTOP VERSION*/}
      {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
      <div className="hidden lg:flex w-screen h-fit mb-2 overflow-x-hidden z-0 px-4">
        <ImageDisplay
          selectedImage={base64Image}
          drawLine={isInfering}
          bboxData={bboxData}
          radioBtnValue={outputOption}
          onDetection={handleDetection}
        />
      </div>

      {/* Render CrackDetectedModal if detection occurred */}
      {detectionOccurred && (
        <CrackDetectedModal
          isOpen={isCrackDetectedModalOpen}
          onClose={handleCrackDetectedModalToggle}
        />
      )}
    </div>
  );
};

export default Yolov8Inference;
