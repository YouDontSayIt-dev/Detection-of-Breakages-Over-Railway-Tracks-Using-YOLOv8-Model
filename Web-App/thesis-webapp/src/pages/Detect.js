import React, { useState } from "react";
import NavBar from "../components/NavBar";
import camera from "../assets/camera.png";

function Detect() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use 'image' (data URL) and 'title' here to submit the data to a server or perform further actions.
    console.log("Image Title:", title);
  };

  return (
    <div className="bg-custom-green h-screen font-sans">
      {/* NAV BAR  */}
      <NavBar />
      <div className="flex flex-row items-center justify-center">
        {/* LEFT SIDE  */}
        <div className="w-[55%] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mt-16 mr-28">
            <h1 className="text-custom-text-orange text-7xl font-bold">
              RAIL DETECT
            </h1>
            <img src={camera} alt="camera" className="w-9 h-9 mb-16 ml-7" />
          </div>
          {/* BOX 1 BEHIND */}
          <div className="w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border shadow-custom-box-shadow mt-10 mr-12 z-1"></div>
          {/* BOX 2 FRONT */}
          <div className="bg-custom-box-1 w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border-box-2 shadow-custom-box-shadow-2 mr-1 z-50 absolute top-72">
            {image && (
              <img
                src={image}
                alt="Uploaded"
                className="object-cover w-full h-full rounded-2xl"
              />
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[45%] h-96 space-y-20 mt-24">
          {/* RADIO BTNS */}
          <div className="w-[308px] h-[56px] bg-black"></div>

          {/* UPLOAD FILE */}
          <div className="p-4 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="upload-input" className="text-lg font-bold">
                  Select a file:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="upload-input"
                />
                <input
                  type="text"
                  placeholder="Image Title"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg mt-2"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Upload
              </button>
            </form>
          </div>

          <div className="w-[308px] h-[56px] bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Detect;
