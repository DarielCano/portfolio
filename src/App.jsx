import { useState } from "react";
import "animate.css";
import "./App.css";
import HeroContainer from "./components/heroContainer/HeroContainer";
import Profile from "./components/Profile/Profile";
import PortFolioContainer from "./components/PortFolioContainer/PortFolioContainer";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/navBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [navBarBg, setNavBarBg] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 100) {
      setNavBarBg(true);
    } else {
      setNavBarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <>
      <BrowserRouter>
        <NavBar navBarBg={navBarBg} />
        <Routes>
          <Route path="/" element={<HeroContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<PortFolioContainer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
