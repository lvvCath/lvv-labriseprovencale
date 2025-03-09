import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";
import "./Section3.css";

function Section3() {
  const { language } = useLanguage();

  return (
    <Container fluid className="section3-container">
      {/* Body */}
      <div className="body3-container"></div>

      {/* Video */}
      <div className="video3-container">
        <video
          autoPlay={false}
          loop
          controls
          style={{ width: "100%", height: "auto" }}
          poster="/assets/video/video-poster.png"
        >
          <source src="/assets/video/villa-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
