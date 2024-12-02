import React from "react";
import { useState } from "react";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";
import "./Section5.css";
import divider from "../../assets/icon/review-stars.png";
import airbnb from "../../assets/icon/airbnb.png";
import booking from "../../assets/icon/booking.png";
import arrowLeft from "../../assets/icon/arrow-left.svg";
import arrowRight from "../../assets/icon/arrow-right.svg";
import section5x1 from "../../assets/images/homepage/section5x1.jpg";
import section5x2 from "../../assets/images/homepage/section5x2.jpg";
import section5x3 from "../../assets/images/homepage/section5x3.jpg";
import section5x4 from "../../assets/images/homepage/section5x4.jpg";

function Section5() {
  const { language } = useLanguage();

  const [currentSelection, setCurrentSelection] = useState(0);
  const currentSections = [section5x1, section5x2, section5x3, section5x4];

  const handleArrowClick = (direction: "left" | "right") => {
    setCurrentSelection((prevIndex) =>
      direction === "left"
        ? prevIndex === 0
          ? currentSections.length - 1
          : prevIndex - 1
        : prevIndex === currentSections.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const logoImage = currentSelection < 2 ? airbnb : booking; // First two selections are Airbnb, the rest are Booking

  return (
    <Container fluid className="section5-container">
      <h1 className="header-text-dark s5-title">
        <GetText
          folder={language}
          page="homepage"
          section="section5"
          field="title"
        />
      </h1>
      {/* Body */}
      <div className="body5-container"></div>

      {/* Reviews */}
      <div
        className="reviews-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <p className="body-text-dark s5-txtcontent">
          <GetText
            folder={language}
            page="homepage"
            section={`section5x${currentSelection + 1}`}
            field="content"
          />
        </p>

        {/* Circle Image */}
        <div className="circle-image">
          <img src={currentSections[currentSelection]} alt="profile image" />
        </div>
      </div>

      {/* Title */}
      <div className="label5-container">
        {/* Divider and arrows */}
        <div className="carousel-controls">
          <button
            className="arrow-button"
            onClick={() => handleArrowClick("left")}
          >
            <img src={arrowLeft} alt="Left Arrow" />
          </button>
          <img src={divider} alt="Divider" className="divider-image" />
          <button
            className="arrow-button"
            onClick={() => handleArrowClick("right")}
          >
            <img src={arrowRight} alt="Right Arrow" />
          </button>
        </div>
        <p className="body-text-dark">
          <GetText
            folder={language}
            page="homepage"
            section={`section5x${currentSelection + 1}`}
            field="title"
          />
        </p>
        {/* Logo Image */}
        <img src={logoImage} alt="Review logo" className="review-logo" />
      </div>
    </Container>
  );
}

export default Section5;
