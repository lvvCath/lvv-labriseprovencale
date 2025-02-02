import "./Section1.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";

import info_surface from "/assets/icon/info-surface.svg";
import info_parking from "/assets/icon/info-parking.svg";
import info_internet from "/assets/icon/info-internet.svg";
import info_home from "/assets/icon/info-home.svg";

const infoItems = [
  { icon: info_surface, field: "surface" },
  { icon: info_parking, field: "parking" },
  { icon: info_internet, field: "internet" },
  { icon: info_home, field: "leftwing" },
  { icon: info_home, field: "basement" },
  { icon: info_home, field: "rightwing" },
];

function Section1() {
  const { language } = useLanguage();

  return (
    <Container fluid className="info-s1">
      <div className="body">
        <h1 className="header-text-dark title">
          <GetText
            folder={language}
            page="info"
            section="section1"
            field="title"
          />
        </h1>
        {infoItems.map(({ icon, field }, index) => (
          <div key={index} className="content">
            <img src={icon} className="icon" alt="icon" />
            <p className="body-text-dark">
              <GetText
                folder={language}
                page="info"
                section="section1"
                field={field}
              />
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Section1;
