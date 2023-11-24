import React, { useRef, useEffect, useState } from "react";

const ImageDisplay = ({ selectedImage, drawLine, bboxData, radioBtnValue }) => {
  const canvasRef = useRef(null);
  const isDrawing = drawLine;
  const [canvasWidth, setCanvasWidth] = useState(640); // Default width
  const [canvasHeight, setCanvasHeight] = useState(640); // Default height

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
            ctx.fillRect(x1, y1 - 20, textWidth + boxPadding * 2, 20 + boxPadding * 2);

            // Draw bounding box border
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.strokeRect(x1, y1, width, height);

            // Draw text inside filled box for better visibility
            ctx.font = "10px Arial"; // Set the font size and type
            ctx.fillStyle = "white"; // Set text color
            ctx.fillText(text, x1 + boxPadding, y1 - 5);  // Adjust the position of the text
          });
        }
      };
    }
  }, [selectedImage, isDrawing, bboxData]);

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
