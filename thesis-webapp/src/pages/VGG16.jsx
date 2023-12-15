import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageDisplay from "../components/ImageDisplayOther";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import CrackDetectedModal from "../components/CrackDetectedModal";
import CrackNotDetectedModal from "../components/CrackNotDetectedModal";
import Header from "../components/Header-vgg16";

const Vgg16 = () => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);
  const [upload, setUpload] = useState(null);
  const [imgData, setimgData] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [isCrackNotDetectedModalOpen, setCrackNotDetectedModalOpen] = useState(null);
  const [isCrackDetectedModalOpen, setCrackDetectedModalOpen] = useState(false);
  const [outputOption, setOutputOption] = useState("image");
  const [isInfering, setIsInfering] = useState(false);

  const handleDetection = (value) => {
    setDetectionOccurred(value);
  };

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

  // FOR RADIO BTN VALUE
  const handleRadioChange = (value) => {
    setOutputOption(value);
  };

  console.log("Current radio button value:", outputOption);

  const location = useLocation();

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
      "https://cors-anywhere.herokuapp.com/https://vgg16-crack-detection-app-2ecca2e18152.herokuapp.com/predict";

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

  return (
    <div className="flex flex-col w-full h-full bg-customBackground overflow-x-hidden">
      <Sidebar activePage={location.pathname} />
      <Header>VGG16 Model</Header>

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

        <div className="order-4  mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} />
        </div>

        <div className="order-3 lg:hidden mb-8">
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

      <div className="hidden lg:flex w-screen h-fit mb-2 overflow-x-hidden z-0 px-4">
        <ImageDisplay
          selectedImage={base64Image}
          imgData={imgData}
          radioBtnValue={outputOption}
          onDetection={handleDetection}
        />
      </div>

      {renderModal()}
    </div>
  );
};

export default Vgg16;
