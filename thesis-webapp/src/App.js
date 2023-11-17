import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import YOLOV8Inference from "./pages/YOLOv8_Inference";
import YOLOV8Realtime from "./pages/YOLOv8_Realtime";
import ResNet50 from "./pages/ResNet50";
import VGG16 from "./pages/VGG16";
import InceptionV3 from "./pages/InceptionV3";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <div className="font-Open">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/yolov8/inference" element={<YOLOV8Inference />} />
          <Route path="/yolov8/realtime" element={<YOLOV8Realtime />} />
          <Route path="/resnet50" element={<ResNet50 />} />
          <Route path="/vgg16" element={<VGG16 />} />
          <Route path="/inceptionv3" element={<InceptionV3 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*">"404 Not Found!"</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
