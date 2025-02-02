import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

function Section2() {
  const { language } = useLanguage();

  return (
    <Container fluid className="outdoor-s2">
      <Row className="navigation">
        <Col>
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="outdoor"
              section="section2"
              field="title"
            />
          </h1>
        </Col>
      </Row>
      <Row>
        <span className="nav-line"></span>
      </Row>
      <Row className="content-section">
        <iframe
          width="100%"
          height="640"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src="https://kuula.co/share/collection/7KPm2?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2"
        ></iframe>
      </Row>
    </Container>
  );
}

export default Section2;
