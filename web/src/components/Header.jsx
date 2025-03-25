import React, { useState, useEffect } from "react";
import "./Header.css";
import KumtaLogo from "../assets/images/kumtalogo.png";
import TranslatorIcon from "../assets/images/Translater.png"; 

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/85/2f/d1/caption.jpg?w=900&h=500&s=1",
  "https://avathioutdoors.gumlet.io/travelGuide/dev/gokarna_P3183.jpg",
  "https://www.holidify.com/images/cmsuploads/compressed/kudle-beach_20171120232400.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/14/46/2f/54/photo-6.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/85/2f/d1/caption.jpg?w=900&h=500&s=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lSgm2Ebndyk0sWulINAZ0VYTTUdHBTH9pQ&s"
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      {/* Background Image Slider */}
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          ></div>
        ))}
      </div>

      {/* Header Content */}
      <div className="top-bar">
        <img src={KumtaLogo} alt="Logo" className="logo" />

        <div className="search-bar">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png" 
            alt="Search"
            className="search-icon"
          />
          <input type="text" placeholder="Search here..." />
        </div>

        {/* Translator Dropdown */}
        <div className="translator-container">
          <img
            src={TranslatorIcon}
            alt="Translator"
            className="translator-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="translator-dropdown">
              <div className="translator-option">Kannada</div>
              <div className="translator-option">English</div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="content-section">
        <h1>Namma Kumta</h1>
      </div>

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
