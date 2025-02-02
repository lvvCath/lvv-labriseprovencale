import { Link } from "react-router-dom";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Section4.css";
import ImageFadeIn from "../../components/ImageFadeIn";
import section4x1 from "/assets/images/homepage/section4x1.jpeg";
import section4x2 from "/assets/images/homepage/section4x2.jpeg";
import section4x3 from "/assets/images/homepage/section4x3.jpeg";

function Section4() {
  const { language } = useLanguage();
  const links = ["/thevilla", "/guesthouse", "/information"];

  return (
    <Container fluid className="section4-container">
      <div className="s4-title-divider">
        <span className="line-with-diamond">
          <div className="diamond"></div>
        </span>
        <h1 className="header-text-dark s4-title">
          <GetText
            folder={language}
            page="homepage"
            section="section4"
            field="title"
          />
        </h1>
        <span className="line-with-diamond">
          <div className="diamond"></div>
        </span>
      </div>

      <Row className="body4-container">
        {[section4x1, section4x2, section4x3].map((src, index) => (
          <Col
            lg={4}
            className="s4-col-container"
            key={`section4-image-${index}`}
          >
            <div className="s4-image-container">
              <Link to={links[index]} className="s4-image-link">
                <ImageFadeIn src={src} alt="Portrait" className="s4-image" />
                <div className="s4-overlay">
                  <p className="body-text-dark">
                    <GetText
                      folder={language}
                      page="homepage"
                      section="section4"
                      field="content"
                    />
                  </p>
                </div>
              </Link>
            </div>

            <h2 className="header-text-dark s4-col-title">
              <GetText
                folder={language}
                page="homepage"
                section={`section4x${index + 1}`}
                field="title"
              />
            </h2>
            <p className="body-text-dark s4-txtcontent">
              <GetText
                folder={language}
                page="homepage"
                section={`section4x${index + 1}`}
                field="content"
              />
            </p>
          </Col>
        ))}
      </Row>

      <div className="s4-title-divider">
        <span className="line-with-diamond"></span>
      </div>
    </Container>
  );
}

export default Section4;
