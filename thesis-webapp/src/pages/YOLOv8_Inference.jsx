import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import ImageDisplay from "../components/ImageDisplayYOLO";
import axios from "axios";
import CrackDetectedModal from "../components/CrackDetectedModal";
import CrackNotDetectedModal from "../components/CrackNotDetectedModal";
import Header from "../components/Header-yolo";

const Yolov8Inference = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [isInfering, setIsInfering] = useState(false); // To disable the inference button while infering
  const [bboxData, setBboxData] = useState(null); // Store the bbox data in a hook
  const [detectionOccurred, setDetectionOccurred] = useState(false);
  // New state for modal visibility
  const [isCrackDetectedModalOpen, setCrackDetectedModalOpen] = useState(false);
  const [isCrackNotDetectedModalOpen, setCrackNotDetectedModalOpen] =
    useState(null);
  // FOR RADIO BTN VALUE
  const [outputOption, setOutputOption] = useState("image");

  const handleDetection = (value) => {
    setDetectionOccurred(value);
  };

  console.log("Detection Occurred:", detectionOccurred);

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

  // Function to open/close the modal
  const handleCrackNotDetectedModalToggle = () => {
    setCrackNotDetectedModalOpen(!isCrackNotDetectedModalOpen);
  };

  // useEffect to open the modal when detection occurs
  useEffect(() => {
    // Only open CrackNotDetectedModal if detectionOccurred is false and isInfering is true
    if (detectionOccurred === false && isInfering) {
      setCrackNotDetectedModalOpen(true);
    }
  }, [detectionOccurred, isInfering]);

  const handleRadioChange = (value) => {
    setOutputOption(value);
  };

  console.log("Current radio button value:", outputOption);

  const location = useLocation(); //gets the current path location

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
        url: "https://detect.roboflow.com/railway-crack-detection/10",
        params: {
          api_key: "j4oHBD3msAlUlJvXwsHz",
        },
        data: base64Image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          // Check if there are predictions
          const hasPredictions = response.data.predictions.length > 0;

          // Modify the class name of the predictions
          const modifiedBboxData = {
            ...response.data,
            predictions: hasPredictions
              ? response.data.predictions.map((prediction) => ({
                  ...prediction,
                  class: "railway-breakages",
                }))
              : [{ class: "no-breakages" }],
          };

          setBboxData(modifiedBboxData); // Store modified bboxData in state
          setIsInfering(true); // Enable the inference button
          console.log(modifiedBboxData);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    } else {
      console.log("No valid image selected.");
    }
  };

  const renderModal = () => {
    if (detectionOccurred) {
      return (
        <CrackDetectedModal
          isOpen={isCrackDetectedModalOpen}
          onClose={handleCrackDetectedModalToggle}
        />
      );
    } else {
      return (
        <CrackNotDetectedModal
          isOpen={isCrackNotDetectedModalOpen}
          onClose={handleCrackNotDetectedModalToggle}
        />
      );
    }
  };

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
    <div className="flex flex-col w-full h-full bg-customBackground dark:bg-[#228A88] overflow-x-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <Header onThemeChange={handleThemeChange}>YOLOv8 Breakage Detect</Header>

      {/* CONTAINER FOR BUTTONS */}
      <div className=" flex flex-col lg:flex-row justify-center lg:space-x-[100px] items-center z-10 mx-6">
        <div className="order-1 mb-[48px]">
          <UploadButton onChange={handleFileChange} theme={theme} />
        </div>

        <div className="order-2 mb-[48px]">
          <RadioInput
            selectedValue={outputOption}
            onRadioChange={handleRadioChange}
            theme={theme}
          />
        </div>

        <div className="order-4  mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} theme={theme}/>
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

      {/* Render modal based on detection */}
      {renderModal()}
    </div>
  );
};

export default Yolov8Inference;
