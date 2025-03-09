import "./Section3.css";
import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";

import { Container, Row, Col } from "react-bootstrap";

function Section3() {
  const { language } = useLanguage();
  const links = [
    "https://www.airbnb.com/rooms/1062436977643229005?source_impression_id=p3_1733130425_P3T-nIlh46mG3CVE",
    "https://www.booking.com/hotel/fr/la-brise-provencale.html",
  ];
  const site = ["airbnb.com", "booking.com"];

  return (
    <Container fluid className="contact-s3">
      <Row className="title">
        <h1 className="header-text-dark">
          <GetText
            folder={language}
            page="contactus"
            section="section3"
            field="title"
          />
        </h1>
        <p className="body-text-dark">
          <GetText
            folder={language}
            page="contactus"
            section="section3"
            field="message"
          />
        </p>
        <img
          src="/assets/icon/divider1.webp"
          alt="Divider"
          className="divider-image"
        />
      </Row>

      <Row className="bookings">
        {["/assets/icon/airbnb.png", "/assets/icon/booking.png"].map(
          (src, index) => (
            <Col lg={6} className="col-container" key={`image-${index}`}>
              <div className="image-container">
                <a href={links[index]} className="image-link">
                  <ImageFadeIn src={src} alt="Portrait" className="image" />
                  <p className="body-text-dark">{site[index]}</p>
                </a>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}

export default Section3;
