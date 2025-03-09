import { useState, useEffect } from "react";
import "./Section4.css";
import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";

function Section4() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("theater");
  const [showModal, setShowModal] = useState(false);
  const [imageCache, setImageCache] = useState<
    Record<string, Record<string, string>>
  >({});

  const navItems = [
    { id: "theater", label: "Movie Theater" },
    { id: "playroom", label: "Playroom" },
    { id: "spa", label: "Spa & Wellness" },
    { id: "gym", label: "Gym" },
    { id: "pool", label: "Swimming Pool" },
    { id: "playground", label: "Playground" },
    { id: "outdoor", label: "Outdoor Living Space" },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const cache: Record<string, Record<string, string>> = {};

      // Load theater images first
      cache["theater"] = {};
      for (const num of [1, 2, 3, 4, 5, 6, 7]) {
        const img = new Image();
        img.src = `/assets/images/amenities/theater/${num}.webp`;
        await img.decode().catch(() => {}); // Ensures the image is loaded
        cache["theater"][num.toString()] = img.src;
      }

      // Set the cache for theater images immediately
      setImageCache((prev) => ({ ...prev, ...cache }));

      // Load other images asynchronously
      const otherCache: Record<string, Record<string, string>> = {};
      for (const item of navItems) {
        if (item.id === "theater") continue; // Skip theater since it's already loaded
        otherCache[item.id] = {};
        for (const num of [1, 2, 3, 4, 5, 6, 7]) {
          const img = new Image();
          img.src = `/assets/images/amenities/${item.id}/${num}.webp`;
          await img.decode().catch(() => {}); // Ensures the image is loaded
          otherCache[item.id][num.toString()] = img.src;
        }
      }

      // Update cache with other images
      setImageCache((prev) => ({ ...prev, ...otherCache }));
    };

    preloadImages();
  }, []);

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="thevilla-s4">
      <Row className="navigation">
        <Row>
          <span className="nav-line"></span>
        </Row>
        <Row>
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="thevilla"
              section="section4"
              field="title"
            />
          </h1>
        </Row>

        <Row>
          {navItems.slice(0, 4).map((item) => (
            <Col xs={6} s={5} md={3} lg={3} className="btns">
              <img
                src={`/assets/icon/amenities-${item.id}.svg`}
                alt={item.id}
                className="btn-img"
                loading="eager"
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
          {navItems.slice(4, 7).map((item) => (
            <Col xs={6} s={6} md={4} lg={4} className="btns">
              <img
                src={`/assets/icon/amenities-${item.id}.svg`}
                alt={item.id}
                className="btn-img"
                loading="eager"
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
            <img
              src="/assets/icon/divider1.webp"
              alt="Divider"
              className="divider-image"
            />
          </Col>
          <Col lg={7}>
            <div className="img-title">
              <ImageFadeIn
                src={imageCache[selectedNav]?.["1"] || ""}
                alt="Portrait"
              />
            </div>
          </Col>
        </Row>

        <Row className="info-section">
          <Col xs={12} md={12} lg={8} className="imgs-container">
            {[2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={`${selectedNav}-${num}`}
                className={`img-container img-${num}-container`}
                onClick={handleImageClick}
              >
                <img
                  src={imageCache[selectedNav]?.[num.toString()] || ""}
                  alt=""
                  className="image"
                  loading="eager"
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/images/placeholder.webp")
                  }
                />
              </div>
            ))}
          </Col>

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
                  <Carousel.Item key={`${selectedNav}-carousel-${num}`}>
                    <div className="modal-image">
                      <img
                        src={imageCache[selectedNav]?.[num.toString()] || ""}
                        alt=""
                        loading="eager"
                        onError={(e) =>
                          (e.currentTarget.src =
                            "/assets/images/placeholder.webp")
                        }
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

export default Section4;
