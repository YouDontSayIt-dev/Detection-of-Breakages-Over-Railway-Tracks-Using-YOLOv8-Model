import NavBar from "../components/NavBar";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import React, { useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import axios from "axios";

const Detect = () => {
  const [base64Image, setBase64Image] = useState(null);

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
        data: base64Image, // Pass the data URL directly
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    } else {
      console.log("No valid image selected.");
    }
  };

  return (
    <div className="bg-custom-green h-screen font-custom">
      {/* NAV BAR  */}
      <NavBar />
      <div className="flex flex-row items-center justify-center">
        {/* LEFT SIDE  */}
        <ImageDisplay selectedImage={base64Image} />

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[45%] h-96 space-y-10 mt-24">
          {/* RADIO BTNS */}
          <RadioInput />

          {/* UPLOAD BUTTON */}
          <UploadButton onChange={handleFileChange} />

          {/* INFERENCE BUTTON */}
          <div className="w-[308px] h-[56px] absolute bottom-56">
            {/* <button onClick={sendImageToAPI}>Perform Inference</button> */}
            <InferenceButton onClick={sendImageToAPI} />
          </div>
        </div>

        <div className="flex w-max h-max absolute bottom-20 right-40 items-end justify-center">
          <p className="text-custom-white text-2xl">Model's Accuracy:</p>
          <div className="rounded-full w-[88px] h-[88px] bg-custom-bg-radio ml-4 border-[1px] border-solid border-custom-border">
            <p className="text-custom-text-orange font-bold text-3xl text-center my-6 mx-1">
              92%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
