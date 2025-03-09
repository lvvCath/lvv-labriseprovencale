import { useEffect, useState } from "react";
import "./Section3.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";

function Section3() {
  const { language } = useLanguage();
  const [selectedNav, setSelectedNav] = useState("violet");
  const [showModal, setShowModal] = useState(false);
  const [imageCache, setImageCache] = useState<
    Record<string, Record<string, string>>
  >({});

  const navItems = [
    { id: "violet", label: "Violet Room" },
    { id: "peony", label: "Peony Room" },
    { id: "orchid", label: "Orchid Room" },
    { id: "lilac", label: "Lilac Room" },
    { id: "living", label: "Living Room" },
    { id: "kitchen", label: "Kitchen & Dining" },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const cache: Record<string, Record<string, string>> = {};

      // Preload images for Violet Room first
      cache["violet"] = {};
      for (const num of [1, 2, 3, 4]) {
        const img = new Image();
        img.src = `/assets/images/guesthouse/violet/${num}.webp`;
        await img.decode().catch(() => {});
        cache["violet"][num.toString()] = img.src;
      }

      setImageCache(cache);

      // Load other images asynchronously
      for (const item of navItems) {
        if (item.id === "violet") continue;
        cache[item.id] = {};
        for (const num of [1, 2, 3, 4]) {
          const img = new Image();
          img.src = `/assets/images/guesthouse/${item.id}/${num}.webp`;
          await img.decode().catch(() => {});
          cache[item.id][num.toString()] = img.src;
        }
      }
      setImageCache({ ...cache });
    };

    preloadImages();
  }, []);

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
              <Col className="container-btn" key={item.id}>
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
              onClick={handleImageClick}
            >
              <img
                src={
                  imageCache[selectedNav]?.[num.toString()] ||
                  `/assets/images/guesthouse/${selectedNav}/${num}.webp`
                }
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
                <Carousel.Item key={`${selectedNav}-carousel-${num}`}>
                  <div className="modal-image">
                    <img
                      src={`/assets/images/guesthouse/${selectedNav}/${num}.webp`}
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
      </Row>
    </Container>
  );
}

export default Section3;
