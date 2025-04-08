import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Header.css";
import KumtaLogo from "../assets/images/kumtalogo.png";
import TranslatorIcon from "../assets/images/Translater.png";

// Import images dynamically
import seaworld from "../assets/images/seaworld.jpeg";
import kumtatourism from "../assets/images/kumtatourism.jpeg";
import kumtatemple from "../assets/images/kumtatemple.jpeg";
import kumtafish from "../assets/images/kumtafish.jpeg";
import kumtacity from "../assets/images/kumtacity.jpeg";
import kumtanuter from "../assets/images/kumtanuter.jpeg";

const images = [seaworld, kumtatourism, kumtatemple, kumtafish, kumtacity, kumtanuter];

const Header = ({ isCategoryPage }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState("English");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.5)"); // Default background color

  // List of colors to cycle through
  const colors = ["rgba(0, 0, 0, 0.5)", "#ff5733", "#33ff57", "#337aff", "#ff33a6"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowDropdown(false);

    // Change background color dynamically
    setBgColor((prevColor) => {
      const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
      return colors[nextIndex];
    });
  };

  return (
    <div className="header-container" style={{ backgroundColor: bgColor }}>
      {/* Background Image Slider */}
      <div className="slider">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? "active" : ""}`} 
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Header Content */}
      <div className="top-bar">
        <img 
          src={KumtaLogo} 
          alt="Logo" 
          className="logo" 
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <div className="search-bar">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png" 
            alt="Search"
            className="search-icon"
          />
          <input type="text" placeholder="Search here..." />
        </div>

        {/* Translator Dropdown */}
        <div className="translator-container" onClick={() => setShowDropdown(!showDropdown)}>
          <img src={TranslatorIcon} alt="Translator" className="translator-icon" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div 
                className={`dropdown-item ${language === "English" ? "selected" : ""}`}
                onClick={() => handleLanguageChange("English")}
              >
                English
              </div>
              <div 
                className={`dropdown-item ${language === "Kannada" ? "selected" : ""}`}
                onClick={() => handleLanguageChange("Kannada")}
              >
                Kannada
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Hide "Namma Kumta" on Category Page */}
      {!isCategoryPage && (
        <div className="content-section">
          <h1>{language === "Kannada" ? "ನಮ್ಮ ಕುಮಟಾ" : "Namma Kumta"}</h1>
        </div>
      )}

      {/* Dots Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Header;
