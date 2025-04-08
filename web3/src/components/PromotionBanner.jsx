import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PromotionBanner.css";

import leftIcon from "../assets/images/lefticon.png";
import rightIcon from "../assets/images/righticon.png";
import kumtacity from "../assets/images/kumtacity.jpeg";
import kumtanuter from "../assets/images/kumtanuter.jpeg";
import kumtatemple from "../assets/images/kumtatemple.jpeg";
import kumtatourism from "../assets/images/kumtatourism.jpeg";
import seaworld from "../assets/images/seaworld.jpeg";

const images = [kumtacity, kumtanuter, kumtatemple, kumtatourism, seaworld];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow left" onClick={onClick}>
      <img src={leftIcon} alt="Previous" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow right" onClick={onClick}>
      <img src={rightIcon} alt="Next" />
    </button>
  );
};

const PromotionBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="promotion-banner-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="promotion-banner">
            <img src={img} alt={`Slide ${index + 1}`} className="promotion-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionBanner;
