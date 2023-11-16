import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import YOLOV8 from "./pages/YOLOV8";

export default function App() {
  return (
    <div className="font-Open">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/yolov8" element={<YOLOV8 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
