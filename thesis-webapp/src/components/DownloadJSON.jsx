import React from "react";

const DownloadJSON = ({ consoleData }) => {
  return (
    <button style={buttonStyle} onClick={consoleData}>
      JSON
    </button>
  );
};

const buttonStyle = {
  padding: "10px",
  marginTop: "5px",
  marginLeft: "5px",
  background: "#3A623F",
  color: "#FFF",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  width: "140px",
};

export default DownloadJSON;
