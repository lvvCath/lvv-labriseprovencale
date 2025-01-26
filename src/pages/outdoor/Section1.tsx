import React, { useState } from "react";
import "./Section1.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import divider from "../../assets/icon/divider1.png";

function Section1() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("pool");
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { id: "pool", label: "Swimming Pool" },
    { id: "spa", label: "Spa & Wellness" },
    { id: "gym", label: "Gym" },
    { id: "playground", label: "Playground" },
    { id: "outdoor", label: "Outdoor Living Space" },
  ];

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="outdoor-s4">
      <Row className="navigation">
        <Row>
          <span className="nav-line"></span>
        </Row>

        <Row className="btns-container">
          {navItems.slice(0, 5).map((item) => (
            <Col className="btns">
              <img
                src={`src/assets/icon/amenities-${item.id}.svg`}
                alt={item.id}
                className="btn-img"
              />
              <button
                key={item.id}
                className={`nav-button underline-effect ${
                  selectedNav === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedNav(item.id)}
              >
                <p className="text-color-dark nav-text">
                  <GetText
                    folder={language}
                    page="thevilla"
                    section="section4"
                    field={item.id}
                  />
                </p>
              </button>
            </Col>
          ))}
        </Row>

        <Row>
          <span className="nav-line"></span>
        </Row>
      </Row>

      <div className="content-section">
        <Row>
          <Col lg={5} className="content-title-container">
            <h1 className="header-text-dark">
              <GetText
                folder={language}
                page="thevilla"
                section={`section4x${selectedNav}`}
                field="title"
              />
            </h1>
            <p className="body-text-dark subtitle">
              <GetText
                folder={language}
                page="thevilla"
                section={`section4x${selectedNav}`}
                field="subtitle"
              />
            </p>
            <img src={divider} alt="Divider" className="divider-image" />
          </Col>
          <Col lg={7}>
            <div className="img-title">
              <img
                src={`src/assets/images/amenities/${selectedNav}/1.jpeg`}
                alt=""
              />
            </div>
          </Col>
        </Row>

        <Row className="info-section">
          {/* Images */}
          <Col xs={12} md={12} lg={8} className="imgs-container">
            {[2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className={`img-container img-${num}-container`}
                onClick={() => handleImageClick()}
              >
                <img
                  src={`src/assets/images/amenities/${selectedNav}/${num}.jpeg`}
                  alt=""
                  className="image"
                />
              </div>
            ))}
          </Col>

          {/* Information */}
          <Col xs={12} md={12} lg={4} className="content">
            <p className="body-text-dark">
              <GetText
                folder={language}
                page="thevilla"
                section={`section4x${selectedNav}`}
                field="content"
              />
            </p>

            <Row className="amenities">
              <Col>
                <div className="installation-divider">
                  <h1 className="header-text-dark title">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section4x${selectedNav}`}
                      field="installations"
                    />
                  </h1>
                  <span className="line-with-diamond">
                    <div className="diamond"></div>
                  </span>
                </div>
                <p className="body-text-dark">
                  <GetText
                    folder={language}
                    page="thevilla"
                    section={`section4x${selectedNav}`}
                    field="bullet"
                  />
                </p>
              </Col>
            </Row>
          </Col>

          {/* Modal for Image Gallery */}
          <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h1 className="header-text-dark title">
                  <GetText
                    folder={language}
                    page="thevilla"
                    section="section2"
                    field="gallery"
                  />
                </h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel data-bs-theme="dark">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <Carousel.Item>
                    <div className="modal-image">
                      <img
                        src={`src/assets/images/amenities/${selectedNav}/${num}.jpeg`}
                        alt=""
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Modal.Body>
          </Modal>
        </Row>
      </div>
    </Container>
  );
}

export default Section1;
