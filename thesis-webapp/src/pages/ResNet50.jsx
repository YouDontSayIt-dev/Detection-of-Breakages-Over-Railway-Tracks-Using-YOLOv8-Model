import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageDisplay from "../components/ImageDisplayOther";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import Header from "../components/Header-resnet50";
import CrackDetectedModal from "../components/CrackDetectedModal"; //new import

const ResNet50 = () => {
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

  const location = useLocation();

  const [upload, setUpload] = useState(null);
  const [imgData, setimgData] = useState(null); // Store the bbox data in a hook
  const [base64Image, setBase64Image] = useState(null); // Store the base64 image in a hook

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      setUpload(file);
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const base64String = e.target.result;
          setBase64Image(base64String);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const sendImageToAPI = async () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://resnet-breakage-detection-app-338b0522930c.herokuapp.com/predict";

    try {
      const formData = new FormData();
      formData.append("file", upload);
      console.log(upload);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setimgData(data);
      const str = JSON.stringify(data);
      console.log(str);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="flex flex-col w-full h-full bg-customBackground overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header>ResNet50 Model</Header>

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
          {/* FOR MOBILE VERSION*/}
          {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT  */}
          <div className="flex w-screen h-fit mb-2 overflow-x-hidden z-0">
            <ImageDisplay
              selectedImage={base64Image}
              imgData={imgData}
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
          imgData={imgData}
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

export default ResNet50;
