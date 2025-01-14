import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLanguage } from "./LanguageContext";
import GetText from "../components/TextExtractor";
import "./Navbar.css";

export function NavBar() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (field: string) => {
    setActiveLink(field);
  };

  const handleBrandClick = () => {
    setActiveLink(""); // Clear the active link when the brand is clicked
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-top"}`}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className={
            isScrolled
              ? "nav-header-text header-text-dark"
              : "nav-header-text header-text-light"
          }
          onClick={handleBrandClick}
        >
          La brise Provençale
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-lg"
              className="header-text-dark"
            >
              La brise Provençale
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {[
                { name: "thevilla", path: "/thevilla" },
                { name: "guesthouse", path: "/guesthouse" },
                { name: "outdoor", path: "/outdoor" },
                { name: "information", path: "/information" },
                { name: "contactus", path: "/contactus" },
              ].map(({ name, path }) => (
                <Nav.Link
                  as={Link}
                  to={path}
                  key={name}
                  className={`underline-effect ${
                    isScrolled
                      ? "nav-body-text body-text-dark"
                      : "nav-body-text body-text-light"
                  } ${activeLink === name ? "active" : ""}`}
                  onClick={() => handleLinkClick(name)}
                >
                  <GetText
                    folder="all"
                    page="navbar"
                    section={language}
                    field={name}
                  />
                </Nav.Link>
              ))}

              <div className="language-buttons">
                <button
                  className={`underline-effect language-button ${
                    language === "fr" ? "active" : ""
                  } ${isScrolled ? "body-text-dark" : "body-text-light"}`}
                  onClick={() => setLanguage("fr")}
                >
                  Fr
                </button>
                <span
                  className={isScrolled ? "body-text-dark" : "body-text-light"}
                >
                  -
                </span>
                <button
                  className={`underline-effect language-button ${
                    language === "en" ? "active" : ""
                  } ${isScrolled ? "body-text-dark" : "body-text-light"}`}
                  onClick={() => setLanguage("en")}
                >
                  En
                </button>
                <span
                  className={isScrolled ? "body-text-dark" : "body-text-light"}
                >
                  -
                </span>
                <button
                  className={`underline-effect language-button ${
                    language === "zh" ? "active" : ""
                  } ${isScrolled ? "body-text-dark" : "body-text-light"}`}
                  onClick={() => setLanguage("zh")}
                >
                  Zh
                </button>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
