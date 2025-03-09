import { useState, useMemo } from "react";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";
import "./Section5.css";

const basePath = "/assets";

const Section5 = () => {
  const { language } = useLanguage();
  const [currentSelection, setCurrentSelection] = useState(0);

  const currentSections = useMemo(
    () => [
      `${basePath}/images/homepage/section5x1.jpg`,
      `${basePath}/images/homepage/section5x2.jpg`,
      `${basePath}/images/homepage/section5x3.jpg`,
      `${basePath}/images/homepage/section5x4.jpg`,
    ],
    []
  );

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

  const logoImage =
    currentSelection < 2
      ? `${basePath}/icon/airbnb.png`
      : `${basePath}/icon/booking.png`;

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
      <div className="body5-container"></div>
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
        <div className="circle-image">
          <img
            src={currentSections[currentSelection]}
            alt="profile"
            loading="lazy"
          />
        </div>
      </div>
      <div className="label5-container">
        <div className="carousel-controls">
          <button
            className="arrow-button"
            onClick={() => handleArrowClick("left")}
          >
            <img
              src={`${basePath}/icon/arrow-left.svg`}
              alt="Left Arrow"
              loading="lazy"
            />
          </button>
          <img
            src={`${basePath}/icon/review-stars.png`}
            alt="Divider"
            className="divider-image"
            loading="lazy"
          />
          <button
            className="arrow-button"
            onClick={() => handleArrowClick("right")}
          >
            <img
              src={`${basePath}/icon/arrow-right.svg`}
              alt="Right Arrow"
              loading="lazy"
            />
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
        <img
          src={logoImage}
          alt="Review logo"
          className="review-logo"
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default Section5;
