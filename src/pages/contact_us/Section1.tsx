import "./Section1.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row } from "react-bootstrap";

import { FaFacebookSquare } from "react-icons/fa";

const infoItems = [
  { icon: "/assets/icon/icon_whatsapp.svg", field: "number" },
  { icon: "/assets/icon/icon_email.svg", field: "email" },
  { icon: "/assets/icon/info_address.svg", field: "address" },
];

function Section1() {
  const { language } = useLanguage();

  const handleCopy = (event: React.MouseEvent<HTMLDivElement>) => {
    const textElement = event.currentTarget.querySelector("p");
    if (textElement && textElement.innerText) {
      navigator.clipboard.writeText(textElement.innerText);
      alert("Copied to clipboard: " + textElement.innerText);
    }
  };

  return (
    <Container fluid className="contact-s1">
      <div className="img-container">
        <div className="title-container">
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="contactus"
              section="section1"
              field="title"
            />
          </h1>
          {infoItems.map(({ icon, field }, index) => (
            <div
              key={index}
              className="content"
              onClick={handleCopy}
              style={{ cursor: "pointer" }}
            >
              <img src={icon} className="icon" alt="icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="contactus"
                  section="section1"
                  field={field}
                />
              </p>
            </div>
          ))}

          <Row>
            <span className="nav-line"></span>
          </Row>

          <a
            href="https://www.facebook.com/share/15Ks9F9rTi/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="social-icon" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Section1;
