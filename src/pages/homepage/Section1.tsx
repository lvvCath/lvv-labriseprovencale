import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Section1.css";
import ImageFadeIn from "../../components/ImageFadeIn";

// Lazy load the image source
const portraitSrc = "/assets/images/homepage/section1.jpeg";

function Section1() {
  const { language } = useLanguage();

  return (
    <Container fluid className="section1-container">
      <Row className="body-container align-items-center">
        {/* Text Content */}
        <Col md={8} lg={8} className="content-container">
          <h1 className="header-text-dark section1-title">
            <GetText
              folder={language}
              page="homepage"
              section="section1"
              field="title"
            />
          </h1>
          <p className="body-text-dark section1-txtcontent">
            <GetText
              folder={language}
              page="homepage"
              section="section1"
              field="content"
            />
          </p>
        </Col>

        {/* Image Content */}
        <Col md={4} lg={4} className="portrait-container">
          <ImageFadeIn
            src={portraitSrc}
            alt="Portrait"
            className="portrait-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Section1;
