import React, { useRef, useEffect, useState } from "react";

const ImageDisplay = ({
  selectedImage,
  imgData,
  radioBtnValue,
  onDetection,
}) => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);

  // For refresh btn 
  const handleRefresh = () => {
    window.location.reload(true);
  };

  const canvasRef = useRef(null);
  const [canvasWidth] = useState(1000); // Default width
  const [canvasHeight] = useState(1000); // Default height

  const copyToClipboard = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(imgData, null, 2);
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  useEffect(() => {
    if (selectedImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Load the image onto the canvas
      const img = new Image();
      
      img.onload = () => {
        // Set the canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image with the updated dimensions
        ctx.drawImage(img, 0, 0);
      };
      img.src = selectedImage;
    }
  }, [selectedImage, imgData]);

  // Use useEffect to call onDetection only when detectionOccurred changes
  useEffect(() => {
    onDetection(detectionOccurred);
  }, [detectionOccurred, onDetection]);

  useEffect(() => {
    // Check if "cracks" class is present in the prediction array
    const isCracksDetected = imgData?.prediction?.some(
      (item) => item.class === "cracks"
    );

    // Update detectionOccurred based on the result
    setDetectionOccurred(!!isCracksDetected);
  }, [imgData]);

  if (radioBtnValue === "image") {
    return (
      <div className="w-[280px] h-[300px] md:w-[602px] lg:w-[1152px] lg:h-[600px] mx-auto border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay">
        <div className="flex w-full h-[10%] justify-between items-center p-6 text-ebony font-bold text-2xl">
          <h1>Result:</h1>
          <button onClick={handleRefresh}>
            <svg
              width="37"
              height="32"
              viewBox="0 0 37 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16C0 24.8356 7.10048 32 15.8571 32C20.0681 32 24.1029 30.3289 27.1333 27.3778L24.4905 24.7111C22.2529 27.1111 19.1343 28.4444 15.8571 28.4444C4.86286 28.4444 -0.634285 15.04 7.13571 7.2C14.9057 -0.639999 28.1905 4.92444 28.1905 16H22.9048L29.9524 23.1111H30.1286L37 16H31.7143C31.7143 7.16444 24.6138 0 15.8571 0C7.10048 0 0 7.16444 0 16Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* Canvas for drawing */}
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="w-full h-[90%] rounded-b-customCanvasDisplay"
        />
      </div>
    );
  } else if (radioBtnValue === "JSON") {
    return (
      <div className="flex flex-col w-[280px] h-[300px] md:w-[602px] lg:w-[1152px] lg:h-[600px] mx-auto border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay">
        <div className="flex w-full h-[10%] justify-between items-center p-6 text-ebony font-bold text-2xl hover:text-active">
          {/* BUTTON TO COPY THE BBOX DATA */}
          <button onClick={copyToClipboard}>Copy Code</button>
          <button onClick={handleRefresh}>
            <svg
              width="37"
              height="32"
              viewBox="0 0 37 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16C0 24.8356 7.10048 32 15.8571 32C20.0681 32 24.1029 30.3289 27.1333 27.3778L24.4905 24.7111C22.2529 27.1111 19.1343 28.4444 15.8571 28.4444C4.86286 28.4444 -0.634285 15.04 7.13571 7.2C14.9057 -0.639999 28.1905 4.92444 28.1905 16H22.9048L29.9524 23.1111H30.1286L37 16H31.7143C31.7143 7.16444 24.6138 0 15.8571 0C7.10048 0 0 7.16444 0 16Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-[90%] text-ebony overflow-auto px-6">
          {/* Display bounding box data */}
          <pre>{JSON.stringify(imgData, null, 2)}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[280px] h-[300px] md:w-[602px] lg:w-[1152px] lg:h-[600px] mx-auto border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay">
        <div className="flex w-full h-[10%] justify-between items-center p-6 text-ebony font-bold text-2xl">
          <h1>Result:</h1>
        </div>
        {/* Canvas for drawing */}
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="w-full h-[90%] rounded-b-customCanvasDisplay"
        />
      </div>
    );
  }
};

export default ImageDisplay;
