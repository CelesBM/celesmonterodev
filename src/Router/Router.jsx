import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Social from "../pages/Social/Social";
import Projects from "../pages/Projects/Projects";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
