import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageDisplay from "../components/ImageDisplayOther";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import Header from "../components/Header-resnet50";
import CrackDetectedModal from "../components/CrackDetectedModal";
import CrackNotDetectedModal from "../components/CrackNotDetectedModal"; // new import

const ResNet50 = () => {
  // State for file upload
  const [upload, setUpload] = useState(null);

  // State for base64 image
  const [base64Image, setBase64Image] = useState(null);

  // State for radio button value
  const [outputOption, setOutputOption] = useState("image");

  // State for inference status
  const [isInfering, setIsInfering] = useState(false);

  // State for detection occurrence
  const [detectionOccurred, setDetectionOccurred] = useState(false);

  // State for modal visibility
  const [isCrackDetectedModalOpen, setCrackDetectedModalOpen] = useState(false);
  const [isCrackNotDetectedModalOpen, setCrackNotDetectedModalOpen] = useState(null);

  // State for image data from API
  const [imgData, setimgData] = useState(null);

  // Function to handle file change
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

  // Function to handle radio button change
  const handleRadioChange = (value) => {
    setOutputOption(value);
  };

  // Function to handle detection occurrence
  const handleDetection = (value) => {
    setDetectionOccurred(value);
  };

  // Function to open/close the CrackDetectedModal
  const handleCrackDetectedModalToggle = () => {
    setCrackDetectedModalOpen(!isCrackDetectedModalOpen);
  };

  // Function to open/close the CrackNotDetectedModal
  const handleCrackNotDetectedModalToggle = () => {
    setCrackNotDetectedModalOpen(!isCrackNotDetectedModalOpen);
  };

  // useEffect to open the modal when detection occurs
  useEffect(() => {
    if (detectionOccurred) {
      setCrackDetectedModalOpen(true);
    }
  }, [detectionOccurred]);

  // useEffect to open the CrackNotDetectedModal when detection doesn't occur and isInfering is true
  useEffect(() => {
    if (detectionOccurred === false && isInfering) {
      setCrackNotDetectedModalOpen(true);
    }
  }, [detectionOccurred, isInfering]);

  // Function to send image to API
  const sendImageToAPI = async () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://resnet-breakage-detection-app-338b0522930c.herokuapp.com/predict";

    try {
      const formData = new FormData();
      formData.append("file", upload);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      setIsInfering(true);
      const data = await response.json();
      setimgData(data);
      const str = JSON.stringify(data);
      console.log(str);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Function to render the appropriate modal based on detection
  const renderModal = () => {
    if (detectionOccurred) {
      return (
        <CrackDetectedModal
          isOpen={isCrackDetectedModalOpen}
          onClose={handleCrackDetectedModalToggle}
        />
      );
    } else if (isCrackNotDetectedModalOpen) {
      return (
        <CrackNotDetectedModal
          isOpen={isCrackNotDetectedModalOpen}
          onClose={handleCrackNotDetectedModalToggle}
        />
      );
    } else {
      return null;
    }
  };

  const location = useLocation();

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
      {/* SIDEBAR COMPONENT */}
      <Sidebar activePage={location.pathname} />
      <Header onThemeChange={handleThemeChange}>ResNet50 Model</Header>

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-[100px] items-center z-10 mx-6">
        <div className="order-1 mb-[48px]">
          <UploadButton onChange={handleFileChange} />
        </div>

        <div className="order-2 mb-[48px]">
          <RadioInput
            selectedValue={outputOption}
            onRadioChange={handleRadioChange}
          />
        </div>

        <div className="order-4 mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} />
        </div>

        <div className="order-3 lg:hidden mb-8">
          {/* FOR MOBILE VERSION*/}
          {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT */}
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
      {/* CONTAINER FOR YOLOV8 IMAGE/JSON OUTPUT */}
      <div className="hidden lg:flex w-screen h-fit mb-2 overflow-x-hidden z-0 px-4">
        <ImageDisplay
          selectedImage={base64Image}
          imgData={imgData}
          radioBtnValue={outputOption}
          onDetection={handleDetection}
        />
      </div>

      {/* Render modal based on detection */}
      {renderModal()}
    </div>
  );
};

export default ResNet50;
