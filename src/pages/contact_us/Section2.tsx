import "./Section2.css";
import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

import host from "../../assets/images/contactus/Section2.png";

function Section2() {
  const { language } = useLanguage();

  return (
    <Container fluid className="contact-s2">
      <Row className="content">
        <Col className="host-img-container" xs={12} md={12} lg={6}>
          <ImageFadeIn src={host} alt="Portrait" className="host-img" />
        </Col>
        <Col className="host-content" xs={12} md={12} lg={6}>
          <h1 className="header-text-dark">
            <GetText
              folder={language}
              page="contactus"
              section="section2"
              field="title"
            />
          </h1>

          <p className="body-text-dark">
            <GetText
              folder={language}
              page="contactus"
              section="section2"
              field="message"
            />
          </p>
          <p className="body-text-dark sincerly">
            <GetText
              folder={language}
              page="contactus"
              section="section2"
              field="sincerly"
            />
          </p>
          <p className="body-text-dark host">
            <GetText
              folder={language}
              page="contactus"
              section="section2"
              field="host"
            />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2;
