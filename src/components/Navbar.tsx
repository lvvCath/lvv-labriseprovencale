import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLanguage } from "./LanguageContext";
import GetText from "../components/TextExtractor";

export function NavBar() {
  const { language, setLanguage } = useLanguage();

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">La brise Provençale</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#thevilla">
                <GetText
                  folder="all"
                  page="navbar"
                  section={language}
                  field="thevilla"
                />
              </Nav.Link>
              <Nav.Link href="#guesthouse">
                <GetText
                  folder="all"
                  page="navbar"
                  section={language}
                  field="guesthouse"
                />
              </Nav.Link>
              <Nav.Link href="#outdoor">
                <GetText
                  folder="all"
                  page="navbar"
                  section={language}
                  field="outdoor"
                />
              </Nav.Link>
              <Nav.Link href="#information">
                <GetText
                  folder="all"
                  page="navbar"
                  section={language}
                  field="information"
                />
              </Nav.Link>
              <Nav.Link href="#contactus">
                <GetText
                  folder="all"
                  page="navbar"
                  section={language}
                  field="contactus"
                />
              </Nav.Link>
              <button onClick={() => setLanguage("fr")}>Fr</button>
              <button onClick={() => setLanguage("en")}>En</button>
              <button onClick={() => setLanguage("zh")}>Zh</button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
