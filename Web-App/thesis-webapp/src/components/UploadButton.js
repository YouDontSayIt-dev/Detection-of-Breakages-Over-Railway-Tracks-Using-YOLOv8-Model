import React from "react";

const UploadButton = ({ onChange }) => {
  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      <label htmlFor="picture" style={{ color: "white" }}>
        Upload a file:
      </label>
      <input
        id="picture"
        type="file"
        accept="image/*"
        className="flex h-13 w-72 rounded-md px-3 py-3 text-white text-medium file:border-1 file:bg-transparent file:text-white file:text-medium file:font-medium"
        style={{
          backgroundColor: "#3A623F",
          color: "white",
          cursor: "pointer",
          borderRadius: "10px",
        }}
        onChange={onChange} // Call the provided function on change
      />
    </div>
  );
};

export default UploadButton;
