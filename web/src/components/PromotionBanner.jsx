import React from "react";
import "./PromotionBanner.css";

const PromotionBanner = () => {
  return (
    <div className="promotion-banner">
      <div className="promotion-content">
        <p>Quality goods, waiting for </p>
        <p>you to choose!</p>
      </div>
      <div className="promotion-arrow">
        <span>➔</span>
      </div>
    </div>
  );
};

export default PromotionBanner;
