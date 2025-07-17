import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import Forum from "./pages/Forum";
import Home from "./pages/Home"
import BuildHelp from "./pages/BuildHelp"
import Inventory from "./pages/Inventory"
import Map from "./pages/Map"

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsSidebarOpen(true);
    setShowHeader(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setShowHeader(true);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeSidebar();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeSidebar}>
          &times;
        </button>
        <ul>
          <li onClick={() => handleNavigate("/")}>Home</li>
          <li onClick={() => handleNavigate("/forum")}>Forum</li>
          <li onClick={() => handleNavigate("/map")}>Interactive Map</li>
          <li onClick={() => handleNavigate("/inventory")}>Inventory</li>
          <li onClick={() => handleNavigate("/help")}>Build Help</li>
        </ul>
      </div>

      <header className={`App-header ${showHeader ? "show" : "hide"}`}>
        Welcome to the world of Enigma
        <button className="button" onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <main className="App-body">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/forum" element={<Forum />} />
          <Route path="/map" element={<Map />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/help" element={<BuildHelp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
