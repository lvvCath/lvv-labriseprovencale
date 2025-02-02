import "./Section1.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container } from "react-bootstrap";
import icon_house from "/assets/icon/icon_house.svg";
import icon_bed from "/assets/icon/icon_bed.svg";
import icon_bath from "/assets/icon/icon_bath.svg";
import icon_wifi from "/assets/icon/icon_wifi.svg";
import icon_people from "/assets/icon/icon_people.svg";

type Section1Props = {
  page: string;
};

function Section1({ page }: Section1Props) {
  const { language } = useLanguage();

  return (
    <Container fluid className={`thevilla-s1 ${page}`}>
      <div className="s1-img-container">
        <div className="s1-body">
          <h2 className="header-text-light title">
            <GetText
              folder={language}
              page={page}
              section="section1"
              field="title"
            />
          </h2>
          <div className="s1-content">
            <img src={icon_house} className="s1-icon" alt="logo" />
            <p className="body-text-light">
              <GetText
                folder={language}
                page={page}
                section="section1"
                field="villasize"
              />
            </p>
          </div>
          <div className="s1-content">
            <img src={icon_bed} className="s1-icon" alt="logo" />
            <p className="body-text-light">
              <GetText
                folder={language}
                page={page}
                section="section1"
                field="bedroom"
              />
            </p>
          </div>
          <div className="s1-content">
            <img src={icon_bath} className="s1-icon" alt="logo" />
            <p className="body-text-light">
              <GetText
                folder={language}
                page={page}
                section="section1"
                field="bathroom"
              />
            </p>
          </div>
          <div className="s1-content">
            <img src={icon_wifi} className="s1-icon" alt="logo" />
            <p className="body-text-light">
              <GetText
                folder={language}
                page={page}
                section="section1"
                field="wifi"
              />
            </p>
          </div>
          <div className="s1-content">
            <img src={icon_people} className="s1-icon" alt="logo" />
            <p className="body-text-light">
              <GetText
                folder={language}
                page={page}
                section="section1"
                field="capacity"
              />
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Section1;
