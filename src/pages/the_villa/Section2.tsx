import React, { useState } from "react";
import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";
import divider from "../../assets/icon/divider1.png";

function Section2() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("bedroom");

  const navItems = [
    { id: "bedroom", label: "Bedroom" },
    { id: "kidsroom", label: "Kids Room" },
    { id: "livingroom", label: "Living Room" },
    { id: "workplace", label: "Workplace" },
    { id: "kitchen", label: "Kitchen" },
    { id: "diningroom", label: "Dining Room" },
  ];

  return (
    <Container fluid className="thevilla-s2">
      <Row className="navigation-s2">
        <Col>
          <h1 className="header-text-light s4-title">
            <GetText
              folder={language}
              page="thevilla"
              section="section2"
              field="title"
            />
          </h1>
        </Col>
        <Col className="nav_container_s2" lg={{ order: "first" }}>
          <Row>
            <span className="nav-line"></span>
          </Row>
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item.id}
              className={`nav-button underline-effect ${
                selectedNav === item.id ? "active" : ""
              }`}
              onClick={() => setSelectedNav(item.id)}
            >
              <p className="text-color-light nav-text-s2">{item.label}</p>
            </button>
          ))}
        </Col>

        <Col className="nav_container_s2">
          <Row>
            <span className="nav-line"></span>
          </Row>
          {navItems.slice(3).map((item) => (
            <button
              key={item.id}
              className={`nav-button underline-effect ${
                selectedNav === item.id ? "active" : ""
              }`}
              onClick={() => setSelectedNav(item.id)}
            >
              <p className="text-color-light nav-text-s2">{item.label}</p>
            </button>
          ))}
        </Col>
      </Row>

      <div className="content-section">
        {/* Room Image */}
        <img
          className="img-title-s2"
          src={`src/assets/images/thevilla/section2x1x${selectedNav}.jpeg`}
          alt="profile image"
        />

        {/* Room Title */}
        <div className="content-title-container">
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section="section2"
              field={selectedNav}
            />
          </h1>
          <p className="body-text-dark subtitle">
            <GetText
              folder={language}
              page="thevilla"
              section="section2"
              field={`${selectedNav}xsubtitle`}
            />
          </p>
          <img src={divider} alt="Divider" className="divider-image" />
        </div>

        {/* Room Details */}
        <Row>
          {/* Images */}
          <Col></Col>
          {/* Info */}
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}

export default Section2;
