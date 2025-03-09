import "./Section0.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";

const divider = "/assets/icon/divider1.webp";

type Section0Props = {
  page: string;
};

function Section0({ page }: Section0Props) {
  const { language } = useLanguage();
  const sectionImage = `/assets/images/${page}/section0.webp`;

  return (
    <Container fluid className="thevilla-s0">
      {/* Hero Image */}
      <div
        className={`s0-img-container s0-${page}`}
        style={{ backgroundImage: `url(${sectionImage})` }}
      >
        {/* Title */}
        <div className="title-container">
          <h1 className="header-text-light title">
            <GetText
              folder={language}
              page={page}
              section="section0"
              field="title"
            />
          </h1>
          <p className="body-text-light">
            <GetText
              folder={language}
              page={page}
              section="section0"
              field="content"
            />
          </p>
        </div>
      </div>

      {/* Sub content */}
      <div className="subcontent">
        <p className="body-text-dark">
          <GetText
            folder={language}
            page={page}
            section="section0"
            field="subcontent"
          />
        </p>
        <img src={divider} alt="Divider" className="divider-image" />
      </div>
    </Container>
  );
}

export default Section0;
