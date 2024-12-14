import React, { useState } from "react";
import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";

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
    <Container fluid className="premium-suite-section">
      <div className="navigation">
        <div className="nav-title-container">
          <hr className="nav-line" />
          <h2 className="nav-title">Premium Suite</h2>
          <hr className="nav-line" />
        </div>

        <div className="nav-buttons-container">
          <div className="nav-buttons">
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                className={`nav-button ${
                  selectedNav === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedNav(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="nav-buttons">
            {navItems.slice(3).map((item) => (
              <button
                key={item.id}
                className={`nav-button ${
                  selectedNav === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedNav(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="content">
          <p className="body-text-dark">
            <GetText
              folder={language}
              page="thevilla"
              section="section2"
              field={selectedNav}
            />
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Section2;
