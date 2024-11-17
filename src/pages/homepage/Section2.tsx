import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Section2.css";
import portrait from "../../assets/images/homepage/section1.jpeg";

function Section2() {
  const { language } = useLanguage();

  return (
    <Container fluid className="section2-container">
      <Row className="align-items-center half-viewport">
        <Col xs={12} md={6} className="image-column">
          <div className="image1-bg">
            <img src={portrait} alt="" className="section-image1" />
          </div>
        </Col>
        <Col xs={12} md={6} className="text-column">
          <h1 className="header-text-dark">
            <GetText
              folder={language}
              page="homepage"
              section="section2x1x1"
              field="title"
            />
          </h1>
          <p className="body-text-dark">
            <GetText
              folder={language}
              page="homepage"
              section="section2x1x1"
              field="content"
            />
          </p>
        </Col>
      </Row>

      <Row className="align-items-center half-viewport">
        <Col xs={12} md={6} className="text-column">
          <h1 className="header-text-dark">
            <GetText
              folder={language}
              page="homepage"
              section="section2x2x1"
              field="title"
            />
          </h1>
          <p className="body-text-dark">
            <GetText
              folder={language}
              page="homepage"
              section="section2x2x1"
              field="content"
            />
          </p>
        </Col>
        <Col xs={12} md={6} className="image-column">
          <div className="image2-bg">
            <img src={portrait} alt="" className="section-image2" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2;
