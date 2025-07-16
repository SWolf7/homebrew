import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    setIsSidebarOpen(true);
    setShowHeader(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setShowHeader(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      {/* Dark Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeSidebar}>
          &times;
        </button>
        <ul>
          <li>Forum</li>
          <li>Interactive Map</li>
          <li>Inventory</li>
          <li>Build Help</li>
        </ul>
      </div>

      <header className={`App-header ${showHeader ? "show" : "hide"}`}>
        Welcome to the world of Enigma
        <button className="button" onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </button>
      </header>
      <main className="App-body">
        This is a test of the scrolling capabilities of the application, and I would like to see if the header gets hidden properly and then test the scrolling functionality of the sidebar
      </main>
    </div>
  );
}

export default App;
