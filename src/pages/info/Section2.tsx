import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

function Section2() {
  const { language } = useLanguage();
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9939016545527!2d6.677338675032936!3d43.58584335678639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cea176e4af2b2d%3A0x937a5291a00f6b8b!2sLa%20Brise%20Proven%C3%A7ale!5e0!3m2!1sen!2sph!4v1738498511977!5m2!1sen!2sph";

  const attractions = [1, 2, 3, 4];
  const transit = [1, 2];
  const resto = [1, 2, 3, 4, 5, 6, 7, 8];
  const airport = [1, 2, 3];
  const ski = [1, 2, 3];

  const ListSection = ({
    icon,
    section,
    items,
  }: {
    icon: string;
    section: string;
    items: number[];
  }) => (
    <div className="nearby-places">
      <div className="nearby-header">
        <img src={icon} className="icon" alt="Nearby Icon" />
        <p className="body-text-dark">
          <GetText
            folder={language}
            page="info"
            section={section}
            field="title"
          />
        </p>
      </div>
      <ul className="nearby-list">
        {items.map((num) => (
          <li key={num}>
            <span>
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section={section}
                  field={`${num}`}
                />
              </p>
            </span>
            <span>
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section={section}
                  field={`${num}km`}
                />
              </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Container fluid className="info-s2">
      <div className="body">
        <Row className="map-container">
          <h1 className="header-text-dark title">
            <GetText
              folder={language}
              page="info"
              section="section2"
              field="title"
            />
          </h1>
          <div className="address">
            <img
              src="/assets/icon/info_address.svg"
              className="icon"
              alt="icon"
            />
            <p className="body-text-dark">
              <GetText
                folder={language}
                page="info"
                section="section2"
                field="address"
              />
            </p>
          </div>
          <div className="map">
            <iframe
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Row>

        <Row className="attractions">
          <h1 className="body-text-dark">
            <GetText
              folder={language}
              page="info"
              section="section2"
              field="attractions"
            />
          </h1>

          <Col xs={12} md={12} lg={4}>
            <ListSection
              icon="/assets/icon/info_attraction.svg"
              section="section2xattractions"
              items={attractions}
            />
            <ListSection
              icon="/assets/icon/info_transit.svg"
              section="section2xtransit"
              items={transit}
            />
          </Col>

          <Col xs={12} md={12} lg={4}>
            <ListSection
              icon="/assets/icon/info_resto.svg"
              section="section2xresto"
              items={resto}
            />
          </Col>

          <Col xs={12} md={12} lg={4}>
            <ListSection
              icon="/assets/icon/info_airport.svg"
              section="section2xairport"
              items={airport}
            />
            <ListSection
              icon="/assets/icon/info_ski.svg"
              section="section2xski"
              items={ski}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Section2;
