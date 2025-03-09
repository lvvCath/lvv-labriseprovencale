import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import GetText from "./TextExtractor";
import { useLanguage } from "./LanguageContext";
import { FaFacebookSquare, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const { language } = useLanguage();

  return (
    <Container fluid className="footer-container">
      <Row>
        {/* Logo | Email | Address */}
        <Col className="footer-col-1">
          <img src="/assets/icon/logo.png" className="footer-logo" alt="logo" />
          <div className="footer-email">
            <FaEnvelope className="footer-icon" />
            <p className="body-text-light">la.brise.provencale@gmail.com</p>
          </div>
          <div className="footer-address">
            <FaMapMarkerAlt className="footer-icon" />
            <p className="body-text-light">
              126 IMPASSE DES SACQUETONS,
              <br />
              83440 Saint-Paul-en-Forêt, France
            </p>
          </div>
        </Col>

        {/* Languages */}
        <Col className="footer-col-2">
          <div className="footer-languages">
            <p className="body-text-light">
              <b>
                <GetText
                  folder="all"
                  page="footer"
                  section={language}
                  field="lang"
                />
              </b>
            </p>
            <p>
              <GetText
                folder="all"
                page="footer"
                section={language}
                field="en"
              />
            </p>
            <p className="body-text-light">
              <GetText
                folder="all"
                page="footer"
                section={language}
                field="fr"
              />
            </p>
            <p className="body-text-light">
              <GetText
                folder="all"
                page="footer"
                section={language}
                field="zh"
              />
            </p>
          </div>
        </Col>
      </Row>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/share/15Ks9F9rTi/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="social-icon" />
        </a>
        {/* <a
          href="https://www.instagram.com/YOUR_PAGE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://www.tiktok.com/@YOUR_PAGE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="social-icon" />
        </a> */}
      </div>

      <span className="footer-divider"></span>
      <p className="body-text-light footer-credits">
        © 2024 La brise Provençale
      </p>
    </Container>
  );
}

export default Footer;
