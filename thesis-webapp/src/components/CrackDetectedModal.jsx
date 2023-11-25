import React, { useEffect } from "react";
import "../components/CrackDetectedModal.css";

const CrackDetectedModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Check if the modal is open and play the sound effect
    if (isOpen) {
      import("../audio/popup.mp3")
        .then((module) => {
          const audio = new Audio(module.default);
          audio.play();
        })
        .catch((error) => {
          console.error("Error loading audio file:", error);
        });
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="crack-detected-modal">
          <div className="modal-container">
            <div className="modal-top">
              {/* Add an SVG element here */}
              <svg
                className="centered-svg"
                width="76"
                height="61"
                viewBox="0 0 76 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.4545 38.5263H34.5455V22.4737H41.4545M41.4545 51.3684H34.5455V44.9474H41.4545M0 61H76L38 0L0 61Z"
                  fill="#EBEBEB"
                  fill-opacity="0.921569"
                />
                {/* Your SVG content goes here */}
              </svg>
              <button className="close-icon" onClick={onClose}>
                X
              </button>
            </div>
            <div className="modal-bottom">
              <h1 className="warning">DETECTED!</h1>
              <span className="modal-caption">Railway Crack Detected!</span>
              <button className="close-button" onClick={onClose}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CrackDetectedModal;
