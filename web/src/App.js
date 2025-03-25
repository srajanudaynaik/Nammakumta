import React from "react";
import Header from "./components/Header";
import CategoryIcons from "./components/CategoryIcons";
import PromotionBanner from "./components/PromotionBanner";
import ExplosionToday from "./components/ExplosionToday";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryIcons />
      <PromotionBanner />
      <ExplosionToday />
      <Footer />

    </div>
  );
}

export default App;
