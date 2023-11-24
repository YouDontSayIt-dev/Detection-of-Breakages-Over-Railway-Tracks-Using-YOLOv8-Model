import React from "react";

const InferenceButton = ({ onClick }) => {
  return (
    <div className="flex flex-col">
      <h1 className=" hidden lg:block text-ebony mb-2">Step 3: Run the system</h1>
      <button
      className="w-[215px] h-[56px] bg-customBackground border rounded-customBtn border-customBtn shadow-customShadow rounded-2xl text-base text-ebony transition active:translate-y-1"
      onClick={onClick}
      >
      Run Inference
      </button>
    </div>
    
  );
};

export default InferenceButton;
