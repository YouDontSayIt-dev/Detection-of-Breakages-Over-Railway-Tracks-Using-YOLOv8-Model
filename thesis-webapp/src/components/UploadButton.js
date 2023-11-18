import React from "react";

const UploadButton = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="picture" style={{ color: "white" }}>
        Upload a file:
      </label>
      <input
        id="picture"
        type="file"
        accept="image/*"
        className="flex h-[56px] w-[326px] mt-2 bg-customBackground border rounded-customBtn border-customBtn shadow-customShadow rounded-2xl text-base text-ebony file:h-full file:border file:border-customFile file:rounded-customFile  file:bg-customBackground file:border-l-0 file:border-t-0 file:border-r-2 file:text-ebony file:font-bold"
        onChange={onChange} // Call the provided function on change
      />
    </div>
  );
};

export default UploadButton;
