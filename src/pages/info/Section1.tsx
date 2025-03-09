import "./Section1.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";

const infoItems = [
  { icon: "/assets/icon/info-surface.svg", field: "surface" },
  { icon: "/assets/icon/info-parking.svg", field: "parking" },
  { icon: "/assets/icon/info-internet.svg", field: "internet" },
  { icon: "/assets/icon/info-home.svg", field: "leftwing" },
  { icon: "/assets/icon/info-home.svg", field: "basement" },
  { icon: "/assets/icon/info-home.svg", field: "rightwing" },
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
