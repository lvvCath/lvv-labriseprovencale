import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";
import "./Section3.css";
import S3Video from "/assets/video/villa-tour.mp4";

function Section3() {
  const { language } = useLanguage();

  return (
    <Container fluid className="section3-container">
      {/* Body */}
      <div className="body3-container"></div>

      {/* Video */}
      <div className="video3-container">
        <video
          src={S3Video}
          autoPlay
          loop
          muted
          controls
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Title */}
      <div className="title3-container">
        <h1 className="header-text-dark section3-title">
          <GetText
            folder={language}
            page="homepage"
            section="section3"
            field="title"
          />
        </h1>
      </div>
    </Container>
  );
}

export default Section3;
