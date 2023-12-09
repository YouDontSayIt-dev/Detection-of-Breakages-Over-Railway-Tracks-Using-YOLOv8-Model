import React, { useRef, useEffect, useState } from "react";

const ImageDisplay = ({
  selectedImage,
  drawLine,
  bboxData,
  radioBtnValue,
  onDetection,
}) => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);

  // For refresh btn 
  const handleRefresh = () => {
    window.location.reload(true);
  };

  const canvasRef = useRef(null);
  const isDrawing = drawLine;
  const [canvasWidth] = useState(640); // Default width
  const [canvasHeight] = useState(640); // Default height

  const copyToClipboard = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(bboxData, null, 2);
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

        // Draw bounding boxes if bboxData is available
        if (bboxData && bboxData.predictions) {
          ctx.strokeStyle = "red";
          ctx.lineWidth = 3;

          bboxData.predictions.forEach((prediction) => {
            const x = prediction.x;
            const y = prediction.y;
            const width = prediction.width;
            const height = prediction.height;
            const className = prediction.class;
            const confidence = prediction.confidence;

            const x1 = x - width / 2;
            const y1 = y - height / 2;

            // Measure text width for responsive box size
            const text = `${className} (${(confidence * 100).toFixed(0)}%)`;
            const textWidth = ctx.measureText(text).width;
            const boxPadding = 4; // Adjust padding as needed

            // Draw filled box behind text for better visibility
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // Black with 70% opacity
            ctx.fillRect(
              x1,
              y1 - 20,
              textWidth + boxPadding * 2,
              20 + boxPadding * 2
            );

            // Draw bounding box border
            ctx.strokeStyle = "red";
            ctx.lineWidth = 5;
            ctx.strokeRect(x1, y1, width, height);

            // Draw text inside filled box for better visibility
            ctx.font = "10px Arial"; // Set the font size and type
            ctx.fillStyle = "white"; // Set text color
            ctx.fillText(text, x1 + boxPadding, y1 - 5); // Adjust the position of the text

            setDetectionOccurred(true);
          });
        } else {
          setDetectionOccurred(false);
        }
      };
      img.src = selectedImage;
    }
  }, [selectedImage, isDrawing, bboxData]);

  // Use useEffect to call onDetection only when detectionOccurred changes
  useEffect(() => {
    onDetection(detectionOccurred);
  }, [detectionOccurred, onDetection]);

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
          <pre>{JSON.stringify(bboxData, null, 2)}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[280px] h-[300px] md:w-[602px] lg:w-[1152px] lg:h-[600px] mx-auto border-8 border-customImageDisplay shadow-customImageDisplay rounded-customImageDisplay">
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

