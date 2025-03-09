import { useState, useEffect } from "react";
import "./Section2.css";
import GetText from "../../components/TextExtractor";
import ImageFadeIn from "../../components/ImageFadeIn";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";

function Section2() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("bedroom");
  const [showModal, setShowModal] = useState(false);
  const [imageCache, setImageCache] = useState<Record<string, string>>({});

  const navItems = [
    { id: "bedroom", label: "Bedroom" },
    { id: "kidsroom", label: "Kids Room" },
    { id: "livingroom", label: "Living Room" },
    { id: "workplace", label: "Workplace" },
    { id: "kitchen", label: "Kitchen" },
    { id: "diningroom", label: "Dining Room" },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const cache: Record<string, string> = {};

      // Load bedroom images first
      cache["bedroom"] = `/assets/images/thevilla/section2x1xbedroom.webp`;
      for (let i = 1; i <= 4; i++) {
        const img = new Image();
        img.src = `/assets/images/thevilla/bedroom/${i}.webp`;
        await img.decode().catch(() => {});
        cache[`bedroom_${i}`] = img.src;
      }

      // Update the state for bedroom images first
      setImageCache((prev) => ({ ...prev, ...cache }));

      // Load other images asynchronously
      const otherCache: Record<string, string> = {};
      for (const item of navItems) {
        if (item.id === "bedroom") continue; // Skip bedroom since it's already loaded
        otherCache[
          item.id
        ] = `/assets/images/thevilla/section2x1x${item.id}.webp`;
        for (let i = 1; i <= 4; i++) {
          const img = new Image();
          img.src = `/assets/images/thevilla/${item.id}/${i}.webp`;
          await img.decode().catch(() => {});
          otherCache[`${item.id}_${i}`] = img.src;
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
              <Col className="btns" key={item.id}>
                <button
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
              <Col className="btns" key={item.id}>
                <button
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
        <ImageFadeIn
          src={
            imageCache[selectedNav] ||
            `/assets/images/thevilla/section2x1x${selectedNav}.webp`
          }
          alt="Portrait"
          className="img-title-s2"
        />
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
          <img
            src="/assets/icon/divider1.webp"
            alt="Divider"
            className="divider-image"
          />
        </div>

        <Row>
          <Col xs={12} md={12} lg={7} className="img-container-s2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`img-container img-${num}-container`}
                onClick={handleImageClick}
              >
                <img
                  src={`/assets/images/thevilla/${selectedNav}/${num}.webp`}
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
                <Carousel.Item key={`${selectedNav}-carousel-${num}`}>
                  <div className="modal-image">
                    <img
                      src={`/assets/images/thevilla/${selectedNav}/${num}.webp`}
                      alt=""
                      loading="lazy"
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
      </div>
    </Container>
  );
}

export default Section2;
