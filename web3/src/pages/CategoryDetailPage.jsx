import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryDetailPage.css";

// Item list
const commonItems = [
  { name: "Police Department" },
  { name: "Forest Department" },
  { name: "Tahsildar Department" },
  { name: "Municipal Administration" },
  { name: "Education Department" },
  { name: "Health Department" },
  { name: "Electricity Department" },
  { name: "Postal Department" },
  { name: "Transport Department" },
  { name: "Agriculture Department" },
];

// Header and List Icons
const headerIcon = "https://cdn-icons-png.flaticon.com/512/10728/10728732.png";
const listIcon = "https://cdn-icons-png.flaticon.com/128/4795/4795450.png";

const categoryDetails = {
  Hospital: { title: "Hospital", items: commonItems },
  Departments: { title: "Departments", items: commonItems },
  Associations: { title: "Associations", items: commonItems },
  Tourism: { title: "Tourism", items: commonItems },
  Hotels: { title: "Hotels", items: commonItems },
  RentVehicles: { title: "Rent Vehicles", items: commonItems },
  WeddingPlanning: { title: "Wedding Planning", items: commonItems },
  Shops: { title: "Shops", items: commonItems },
  Services: { title: "Services", items: commonItems },
  Emergency: { title: "Emergency", items: commonItems },
  Education: { title: "Education", items: commonItems },
  CulturalPrograms: { title: "Cultural Programs", items: commonItems },
  RealEstate: { title: "Real Estate", items: commonItems },
};

const CategoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categoryDetails[id];

  if (!category) {
    return <h2 className="not-found">Category not found</h2>;
  }

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="category-detail-container">
      <div className="header-with-icon">
        <div className="back-icon-wrapper" onClick={handleBack}>
          <img src={headerIcon} alt="Back" className="header-icon" />
        </div>
        <h1 className="category-title">{category.title}</h1>
      </div>

      <ul className="category-list">
        {category.items.map((item, index) => (
          <li key={index} className="category-list-item">
            <img src={listIcon} alt={item.name} className="category-icon" />
            <span className="item-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetailPage;
