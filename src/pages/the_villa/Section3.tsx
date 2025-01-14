import React, { useState } from "react";
import "./Section3.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import divider from "../../assets/icon/divider1.png";

function Section3() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("violet");
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { id: "violet", label: "Violet Room" },
    { id: "peony", label: "Peony Room" },
    { id: "orchid", label: "Orchid Room" },
    { id: "lilac", label: "Lilac Room" },
    { id: "living", label: "Living Room" },
    { id: "kitchen", label: "Kitchen & Dining" },
  ];

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="thevilla-s3">
      <Row className="navigation">
        <Col>
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section="section3"
              field="title"
            />
          </h1>
        </Col>
        <Col className="container-btns" lg={9}>
          <Row>
            {navItems.map((item) => (
              <Col className="container-btn">
                <button
                  key={item.id}
                  className={`nav-btn ${
                    selectedNav === item.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedNav(item.id)}
                >
                  <p className="text-color-light nav-text">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section="section3"
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
        {/* Images */}
        <Col xs={12} md={12} lg={7} className="imgs-container">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`img-container img-${num}-container`}
              onClick={() => handleImageClick()}
            >
              <img
                src={`src/assets/images/guesthouse/${selectedNav}/${num}.jpeg`}
                alt=""
                className="image"
              />
            </div>
          ))}
        </Col>

        {/* Information */}
        <Col xs={12} md={12} lg={5} className="content">
          <p className="body-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section={`section3x${selectedNav}`}
              field="title"
            />
          </p>
          <p className="body-text-dark bold subtitle">
            <GetText
              folder={language}
              page="thevilla"
              section={`section3x${selectedNav}`}
              field="subtitle"
            />
          </p>
          <p className="body-text-dark">
            <GetText
              folder={language}
              page="thevilla"
              section={`section3x${selectedNav}`}
              field="content"
            />
          </p>

          <Row className="amenities">
            {selectedNav === "living" || selectedNav === "kitchen" ? (
              <Col>
                <div className="installation-divider">
                  <h1 className="header-text-dark title">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section3x${selectedNav}`}
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
                    section={`section3x${selectedNav}`}
                    field="bullet"
                  />
                </p>
              </Col>
            ) : (
              <>
                <div>
                  <span className="line-with-diamond">
                    <div className="diamond"></div>
                  </span>
                </div>

                <Col>
                  <p className="body-text-dark bold">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section3x${selectedNav}`}
                      field="amenities1"
                    />
                  </p>
                  <p className="body-text-dark">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section3x${selectedNav}`}
                      field="bullet1"
                    />
                  </p>
                </Col>
                <Col>
                  <p className="body-text-dark bold">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section3x${selectedNav}`}
                      field="amenities2"
                    />
                  </p>
                  <p className="body-text-dark">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section={`section3x${selectedNav}`}
                      field="bullet2"
                    />
                  </p>
                </Col>
              </>
            )}
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
              {[1, 2, 3, 4].map((num) => (
                <Carousel.Item>
                  <div className="modal-image">
                    <img
                      src={`src/assets/images/guesthouse/${selectedNav}/${num}.jpeg`}
                      alt=""
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}

export default Section3;
