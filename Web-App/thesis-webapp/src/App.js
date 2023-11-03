import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Detect from "./pages/Detect";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
