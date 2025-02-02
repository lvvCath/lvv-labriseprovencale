import { useState } from "react";
import "./Section6.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

type Section6Props = {
  page: string;
};

function Section6({ page }: Section6Props) {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("ground");

  const navItems = [
    { id: "ground", label: "Ground Floor", page: "guesthouse" },
    { id: "psgl", label: "Premium Suite GL", page: "thevilla" },
    { id: "ps1f", label: "Premium Suite 1F", page: "thevilla" },
    { id: "gs", label: "Guest Suite", page: "guesthouse" },
    { id: "basement", label: "Basement", page: "guesthouse" },
  ];

  return (
    <Container fluid className="thevilla-s6">
      <Row className="navigation">
        <Col>
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section="section6"
              field="title"
            />
          </h1>
        </Col>
        <Col className="container-btns" lg={9}>
          <Row>
            {navItems
              .filter((item) => page === "thevilla" || item.page === page) // Filter logic
              .map((item) => (
                <Col key={item.id} className="container-btn">
                  <button
                    className={`nav-btn ${
                      selectedNav === item.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedNav(item.id)}
                  >
                    <p className="text-color-light nav-text">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section="section6"
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
        <img
          src={`assets/images/floorplan/${language}/${selectedNav}.png`}
          alt=""
        />
      </Row>
    </Container>
  );
}

export default Section6;
