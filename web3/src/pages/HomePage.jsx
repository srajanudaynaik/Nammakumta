import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryIcons from "../components/CategoryIcons";
import ExplosionToday from "../components/ExplosionToday"
import PromotionBanner from "../components/PromotionBanner"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <CategoryIcons />
      <PromotionBanner />
      {/* <ExplosionToday /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
