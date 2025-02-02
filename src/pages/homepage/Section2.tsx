import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Section2.css";

// Import all sections
import section2x1x1 from "/assets/images/homepage/section2x1x1.jpeg";
import section2x1x2 from "/assets/images/homepage/section2x1x2.jpeg";
import section2x1x3 from "/assets/images/homepage/section2x1x3.jpeg";
import section2x1x4 from "/assets/images/homepage/section2x1x4.jpeg";
import section2x2x1 from "/assets/images/homepage/section2x2x1.jpeg";
import section2x2x2 from "/assets/images/homepage/section2x2x2.jpeg";
import section2x2x3 from "/assets/images/homepage/section2x2x3.jpeg";
import divider from "/assets/icon/divider1.png";
import arrowLeft from "/assets/icon/arrow-left.svg";
import arrowRight from "/assets/icon/arrow-right.svg";
import { useState } from "react";

function Section2() {
  const { language } = useLanguage();

  // Manage the current index for the images
  const [currentRow1, setCurrentRow1] = useState(0);
  const [currentRow2, setCurrentRow2] = useState(0);

  const row1Sections = [section2x1x1, section2x1x2, section2x1x3, section2x1x4];
  const row2Sections = [section2x2x1, section2x2x2, section2x2x3];

  // Update the content when arrows are clicked
  const handleArrowClick = (row: number, direction: "left" | "right") => {
    if (row === 1) {
      setCurrentRow1((prevIndex) =>
        direction === "left"
          ? prevIndex === 0
            ? row1Sections.length - 1
            : prevIndex - 1
          : prevIndex === row1Sections.length - 1
          ? 0
          : prevIndex + 1
      );
    } else if (row === 2) {
      setCurrentRow2((prevIndex) =>
        direction === "left"
          ? prevIndex === 0
            ? row2Sections.length - 1
            : prevIndex - 1
          : prevIndex === row2Sections.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  return (
    <Container fluid className="section2-container">
      {/* Row 1 */}
      <Row className="align-items-center half-viewport">
        <Col xs={12} md={6} className="image-column">
          <div className="image1-bg">
            <ImageFadeIn
              src={row1Sections[currentRow1]}
              alt="Portrait"
              className="section-image1"
            />
          </div>
        </Col>
        <Col xs={12} md={6} className="text-column">
          <h1 className="header-text-dark section2-title">
            <GetText
              folder={language}
              page="homepage"
              section={`section2x1x${currentRow1 + 1}`}
              field="title"
            />
          </h1>
          <p className="body-text-dark section2-txtcontent">
            <GetText
              folder={language}
              page="homepage"
              section={`section2x1x${currentRow1 + 1}`}
              field="content"
            />
          </p>

          {/* Divider and arrows */}
          <div className="carousel-controls">
            <button
              className="arrow-button"
              onClick={() => handleArrowClick(1, "left")}
            >
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <img src={divider} alt="Divider" className="divider-image" />
            <button
              className="arrow-button"
              onClick={() => handleArrowClick(1, "right")}
            >
              <img src={arrowRight} alt="Right Arrow" />
            </button>
          </div>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className="align-items-center half-viewport">
        <Col xs={12} md={6} className="text-column">
          <h1 className="header-text-dark section2-title">
            <GetText
              folder={language}
              page="homepage"
              section={`section2x2x${currentRow2 + 1}`}
              field="title"
            />
          </h1>
          <p className="body-text-dark section2-txtcontent">
            <GetText
              folder={language}
              page="homepage"
              section={`section2x2x${currentRow2 + 1}`}
              field="content"
            />
          </p>

          {/* Divider and arrows */}
          <div className="carousel-controls">
            <button
              className="arrow-button"
              onClick={() => handleArrowClick(2, "left")}
            >
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <img src={divider} alt="Divider" className="divider-image" />
            <button
              className="arrow-button"
              onClick={() => handleArrowClick(2, "right")}
            >
              <img src={arrowRight} alt="Right Arrow" />
            </button>
          </div>
        </Col>
        <Col xs={12} md={6} className="image-column">
          <div className="image2-bg">
            <ImageFadeIn
              src={row2Sections[currentRow2]}
              alt="Portrait"
              className="section-image2"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2;
