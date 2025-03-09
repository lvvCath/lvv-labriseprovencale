import { useState } from "react";
import "./Section5.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

type Section6Props = {
  page: string;
};

function Section5({ page }: Section6Props) {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState(
    "https://kuula.co/share/collection/7KPhX?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2"
  );

  const navItems = [
    {
      id: "main",
      src: "https://kuula.co/share/collection/7KPhX?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2",
      page: "thevilla",
    },
    {
      id: "main1f",
      src: "https://kuula.co/share/collection/7Kl66?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2",
      page: "thevilla",
    },
    {
      id: "guest",
      src: "https://kuula.co/share/collection/7KldW?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2",
      page: "guesthouse",
    },
    {
      id: "basement",
      src: "https://kuula.co/share/collection/7KP0K?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2",
      page: "guesthouse",
    },
    {
      id: "outdoor",
      src: "https://kuula.co/share/collection/7KPm2?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=2",
      page: "guesthouse",
    },
  ];

  return (
    <Container fluid className="thevilla-s5">
      <Row className="navigation">
        <Col>
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section="section5"
              field="title"
            />
          </h1>
        </Col>
        <Col className="container-btns" lg={9}>
          <Row>
            {navItems
              .filter((item) => page === "thevilla" || item.page === page)
              .map((item) => (
                <Col key={item.id} className="container-btn">
                  {" "}
                  <button
                    className={`nav-btn ${
                      selectedNav === item.src ? "active" : ""
                    }`}
                    onClick={() => setSelectedNav(item.src)}
                  >
                    <p className="text-color-light nav-text">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section="section5"
                        field={item.id}
                      />
                    </p>
                  </button>
                </Col>
              ))}
          </Row>
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
          src={selectedNav}
        ></iframe>
      </Row>
    </Container>
  );
}

export default Section5;
