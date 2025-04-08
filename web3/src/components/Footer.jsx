import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

import HomeIcon from "../assets/images/Homeicon.png";
import SearchIcon from "../assets/images/Searchicon.png";
import ChatIcon from "../assets/images/Chaticon.png";
import AddIcon from "../assets/images/Addicon.png";
import ProfileIcon from "../assets/images/Profileicon.png";

const icons = [
  { id: 1, name: "Home", icon: HomeIcon, route: "/" }, 
  { id: 2, name: "Search", icon: SearchIcon },
  { id: 3, name: "Chat", icon: ChatIcon },
  { id: 4, name: "Add", icon: AddIcon },
  { id: 5, name: "Profile", icon: ProfileIcon },
];

const Footer = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNavigation = (id, route) => {
    setActiveIndex(id);
    if (route) {
      navigate(route); 
    }
  };

  return (
    <div className="footer-container">
      {icons.map((item) => (
        <div
          key={item.id}
          className={`footer-item ${activeIndex === item.id ? "active" : ""} ${
            item.id === 5 ? "always-active" : ""
          }`}
          onClick={() => handleNavigation(item.id, item.route)}
          style={{ cursor: "pointer" }}
        >
          <img src={item.icon} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
