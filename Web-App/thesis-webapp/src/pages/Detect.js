import NavBar from "../components/NavBar";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import React, { useState } from "react";
import ImageDisplay from "../components/ImageDisplay";

import { storage } from "../components/firebaseDB";

// Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Detect = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [imageUpload, setImageUpload] = useState();


  const uploadFile = () => {
    if (!imageUpload) return;
  // get the reference to the firebase storage using the selected image name
  const imageRef = ref(storage, `images/${imageUpload.name}`);

  // upload the file to the firebase storage
  uploadBytes(imageRef , imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
          });
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setImageUpload(file);
  };

  return (
    <div className="bg-custom-green h-screen font-custom">
      {/* NAV BAR  */}
      <NavBar />
      <div className="flex flex-row items-center justify-center">
        {/* LEFT SIDE  */}
        <ImageDisplay selectedImage={selectedImage} />

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[45%] h-96 space-y-10 mt-24">
          {/* RADIO BTNS */}
          <RadioInput />

          {/* UPLOAD BUTTON */}
          
          <UploadButton onImageChange={handleImageChange} />
         

          {/* INFERENCE BUTTON */}
          <div className="w-[308px] h-[56px] absolute bottom-56" onClick={uploadFile}>
            <InferenceButton />
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
