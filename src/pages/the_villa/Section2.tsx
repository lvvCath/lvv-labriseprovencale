import React, { useState } from "react";
import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import divider from "../../assets/icon/divider1.png";

function Section2() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("bedroom");
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { id: "bedroom", label: "Bedroom" },
    { id: "kidsroom", label: "Kids Room" },
    { id: "livingroom", label: "Living Room" },
    { id: "workplace", label: "Workplace" },
    { id: "kitchen", label: "Kitchen" },
    { id: "diningroom", label: "Dining Room" },
  ];

  const handleImageClick = () => {
    setShowModal(true);
  };

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
          <Row>
            {navItems.slice(0, 3).map((item) => (
              <Col className="btns">
                <button
                  key={item.id}
                  className={`nav-button underline-effect ${
                    selectedNav === item.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedNav(item.id)}
                >
                  <p className="text-color-light nav-text-s2">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section="section2xnav"
                      field={item.id}
                    />
                  </p>
                </button>
              </Col>
            ))}
          </Row>
        </Col>

        <Col className="nav_container_s2">
          <Row>
            <span className="nav-line"></span>
          </Row>
          <Row>
            {navItems.slice(3).map((item) => (
              <Col className="btns">
                <button
                  key={item.id}
                  className={`nav-button underline-effect ${
                    selectedNav === item.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedNav(item.id)}
                >
                  <p className="text-color-light nav-text-s2">
                    <GetText
                      folder={language}
                      page="thevilla"
                      section="section2xnav"
                      field={item.id}
                    />
                  </p>
                </button>
              </Col>
            ))}
          </Row>
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
          <Col xs={12} md={12} lg={7} className="img-container-s2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`img-container img-${num}-container`}
                onClick={() => handleImageClick()}
              >
                <img
                  src={`src/assets/images/thevilla/${selectedNav}/${num}.jpeg`}
                  alt=""
                  className="image"
                />
              </div>
            ))}
          </Col>
          {/* Info */}
          <Col xs={12} md={12} lg={5} className="content">
            <p className="body-text-dark">
              <GetText
                folder={language}
                page="thevilla"
                section={`section2x${selectedNav}`}
                field="content"
              />
            </p>

            <Row className="amenities">
              {selectedNav === "bedroom" || selectedNav === "kidsroom" ? (
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
                        section={`section2x${selectedNav}`}
                        field="amenities1"
                      />
                    </p>
                    <p className="body-text-dark">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section={`section2x${selectedNav}`}
                        field="bullet1"
                      />
                    </p>
                  </Col>
                  <Col>
                    <p className="body-text-dark bold">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section={`section2x${selectedNav}`}
                        field="amenities2"
                      />
                    </p>
                    <p className="body-text-dark">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section={`section2x${selectedNav}`}
                        field="bullet2"
                      />
                    </p>
                  </Col>
                </>
              ) : (
                <Col>
                  <div className="installation-divider">
                    <h1 className="header-text-dark title">
                      <GetText
                        folder={language}
                        page="thevilla"
                        section={`section2x${selectedNav}`}
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
                      section={`section2x${selectedNav}`}
                      field="bullet"
                    />
                  </p>
                </Col>
              )}
            </Row>
          </Col>
        </Row>

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
                      src={`src/assets/images/thevilla/${selectedNav}/${num}.jpeg`}
                      alt=""
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
  );
}

export default Section2;
