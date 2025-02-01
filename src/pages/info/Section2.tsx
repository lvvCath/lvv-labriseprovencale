import "./Section2.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

import info_address from "../../assets/icon/info_address.svg";
import info_attraction from "../../assets/icon/info_attraction.svg";
import info_transit from "../../assets/icon/info_transit.svg";
import info_resto from "../../assets/icon/info_resto.svg";
import info_airport from "../../assets/icon/info_airport.svg";
import info_ski from "../../assets/icon/info_ski.svg";

function Section2() {
  const { language } = useLanguage();
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1403.8623564216157!2d6.678844910492446!3d43.58577118450564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cea0bca840f2b5%3A0x3539073e86ef22b7!2s126%20Les%20Sacquetons%2C%2083440%20Saint-Paul-en-For%C3%AAt%2C%20France!5e0!3m2!1sen!2sph!4v1738340924526!5m2!1sen!2sph";
  const attractions = [1, 2, 3, 4, 5];
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
            <img src={info_address} className="icon" alt="icon" />
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
              icon={info_attraction}
              section="section2xattractions"
              items={attractions}
            />
            <ListSection
              icon={info_transit}
              section="section2xtransit"
              items={transit}
            />
          </Col>

          <Col xs={12} md={12} lg={4}>
            <ListSection
              icon={info_resto}
              section="section2xresto"
              items={resto}
            />
          </Col>

          <Col xs={12} md={12} lg={4}>
            <ListSection
              icon={info_airport}
              section="section2xairport"
              items={airport}
            />
            <ListSection icon={info_ski} section="section2xski" items={ski} />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Section2;
