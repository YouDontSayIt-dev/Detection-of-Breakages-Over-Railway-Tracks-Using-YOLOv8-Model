import Sidebar from "../components/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  return (
    <div className="bg-customBackground w-screen h-screen overflow-hidden">
      <Sidebar activePage={location.pathname} />
    </div>
  );
};

export default AboutUs;
