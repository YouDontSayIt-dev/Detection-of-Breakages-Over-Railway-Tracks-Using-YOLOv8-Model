import React, { useRef, useEffect, useState } from "react";

const ImageDisplay = ({
  selectedImage,
  imgData,
  radioBtnValue,
  onDetection,
}) => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);

  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(1000); // Default width
  const [canvasHeight, setCanvasHeight] = useState(1000); // Default height

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
      img.src = selectedImage;
      // Update canvas dimensions based on image size
      setCanvasWidth(img.width);
      setCanvasHeight(img.height);
      img.onload = () => {
        // Set the canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image with the updated dimensions
        ctx.drawImage(img, 0, 0);
      };
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
