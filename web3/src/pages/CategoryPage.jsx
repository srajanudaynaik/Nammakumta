import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryIcons from "../components/CategoryIcons"; 
import "./CategoryPage.css"; 

const CategoryPage = () => {
  return (
    <div className="category-page-container">
      <Header isCategoryPage={true} /> {/* Pass a prop to identify Category Page */}
      <CategoryIcons isCategoryPage={true} />
      <Footer /> 
    </div>
  );
};

export default CategoryPage;
