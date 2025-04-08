import React from "react";
import "./ExplosionToday.css";

const products = [
  {
    id: 1,
    image: "https://sunnymate.co/wp-content/uploads/2024/11/VB2-787x1024.jpg",
    name: "Carat Diamond Soup Pot 24cm",
  },
  {
    id: 2,
    image: "https://sunnymate.co/wp-content/uploads/2024/11/vk1.jpg",
    name: "Red shirt wooden chair",
  },
  {
    id: 3,
    image: "https://sunnymate.co/wp-content/uploads/2024/11/RESTAURANT-ANG-43-scaled-1-1024x736.jpg",
    name: "40x40 good looking homes",
  },
];

const ExplosionToday = () => {
  return (
    <div className="explosion-container">
      <div className="explosion-header">
        <h3>Popular Searches</h3>
        <div className="explosion-arrow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13077/13077391.png"
            alt="Explosion Icon"
            className="explosion-icon"
          />
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplosionToday;
