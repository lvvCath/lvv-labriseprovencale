import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Section2.css";

// Image paths (stored in public folder)
const row1Sections = [
  "/assets/images/homepage/section2x1x1.jpeg",
  "/assets/images/homepage/section2x1x2.jpeg",
  "/assets/images/homepage/section2x1x3.jpeg",
  "/assets/images/homepage/section2x1x4.jpeg",
];

const row2Sections = [
  "/assets/images/homepage/section2x2x1.jpeg",
  "/assets/images/homepage/section2x2x2.jpeg",
  "/assets/images/homepage/section2x2x3.jpeg",
];

const divider = "/assets/icon/divider1.png";
const arrowLeft = "/assets/icon/arrow-left.svg";
const arrowRight = "/assets/icon/arrow-right.svg";

function Section2() {
  const { language } = useLanguage();
  const [currentRow1, setCurrentRow1] = useState(0);
  const [currentRow2, setCurrentRow2] = useState(0);

  const updateIndex = (row: number, direction: "left" | "right") => {
    if (row === 1) {
      setCurrentRow1((prev) =>
        direction === "left"
          ? (prev - 1 + row1Sections.length) % row1Sections.length
          : (prev + 1) % row1Sections.length
      );
    } else if (row === 2) {
      setCurrentRow2((prev) =>
        direction === "left"
          ? (prev - 1 + row2Sections.length) % row2Sections.length
          : (prev + 1) % row2Sections.length
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
              alt={`Section Image ${currentRow1 + 1}`}
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

          {/* Controls */}
          <div className="carousel-controls">
            <button
              className="arrow-button"
              onClick={() => updateIndex(1, "left")}
              aria-label="Previous Image"
            >
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <img src={divider} alt="Divider" className="divider-image" />
            <button
              className="arrow-button"
              onClick={() => updateIndex(1, "right")}
              aria-label="Next Image"
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

          {/* Controls */}
          <div className="carousel-controls">
            <button
              className="arrow-button"
              onClick={() => updateIndex(2, "left")}
              aria-label="Previous Image"
            >
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <img src={divider} alt="Divider" className="divider-image" />
            <button
              className="arrow-button"
              onClick={() => updateIndex(2, "right")}
              aria-label="Next Image"
            >
              <img src={arrowRight} alt="Right Arrow" />
            </button>
          </div>
        </Col>
        <Col xs={12} md={6} className="image-column">
          <div className="image2-bg">
            <ImageFadeIn
              src={row2Sections[currentRow2]}
              alt={`Section Image ${currentRow2 + 1}`}
              className="section-image2"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2;
