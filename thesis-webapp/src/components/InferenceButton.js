import React from "react";

const InferenceButton = ({ onClick }) => {
  return (
    <button
      className="w-[290px] h-[64px] bg-custom-h1-text text-2xl font-custom text-custom-white px-8 py-2 rounded-md shadow-custom-box-shadow-inference-btn transition active:translate-y-1"
      onClick={onClick}
    >
      Run Inference
    </button>
  );
};

export default InferenceButton;
