import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CategoryIcons.css";
import Hospital from "../assets/images/Hospital.png";
import Departments from "../assets/images/Departments.png";
import Associations from "../assets/images/Associations.png";
import Banks from "../assets/images/Banks.png";
import Tourism from "../assets/images/Tourism.png";
import Hotels from "../assets/images/Hotels.png";
import RentVehicles from "../assets/images/Rent Vehicles.png";
import WeddingPlanning from "../assets/images/Wedding Planning.png";
import Shops from "../assets/images/Shops.png";
import Services from "../assets/images/Services.png";
import Emergency from "../assets/images/Emergency.png";
import Education from "../assets/images/Education.png";
import CulturalPrograms from "../assets/images/Cultural Programs.png";
import RealEstate from "../assets/images/Real Estate.png";
import SeeMore from "../assets/images/See More.png";

const homeCategories = [
  { name: "Hospital", icon: Hospital },
  { name: "Departments", icon: Departments },
  { name: "Associations", icon: Associations },
  { name: "Banks", icon: Banks },
  { name: "Tourism", icon: Tourism },
  { name: "Hotels", icon: Hotels },
  { name: "Rent Vehicles", icon: RentVehicles },
  { name: "Wedding Planning", icon: WeddingPlanning },
  { name: "Shops", icon: Shops },
  { name: "Services", icon: Services },
  { name: "Emergency", icon: Emergency },
];

const categoryPageCategories = [
  ...homeCategories,
  { name: "Education", icon: Education },
  { name: "Cultural Programs", icon: CulturalPrograms },
  { name: "Real Estate", icon: RealEstate },
];

const CategoryIcons = ({ isCategoryPage = false }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="category-container">
      {(isCategoryPage ? categoryPageCategories : homeCategories).map((item, index) => (
        <div key={index} className="category-item" onClick={() => handleCategoryClick(item.name)}>
          <img src={item.icon} alt={item.name} className="category-image" />
          <span className="category-label">{item.name}</span>
        </div>
      ))}
      {!isCategoryPage && (
        <div className="category-item see-more" onClick={() => navigate("/category")}> 
          <img src={SeeMore} alt="See More" className="category-image" />
          <span className="category-label">See More</span>
        </div>
      )}
    </div>
  );
};

export default CategoryIcons;
  