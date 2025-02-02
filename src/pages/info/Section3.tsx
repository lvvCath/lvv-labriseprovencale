import "./Section3.css";
import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";
import { Container, Row, Col } from "react-bootstrap";

import info_checking from "/assets/icon/info_checking.svg";
import info_quiethours from "/assets/icon/info_quiethours.svg";
import info_notallowed from "/assets/icon/info_notallowed.svg";
import info_events from "/assets/icon/info_events.svg";
import info_safety from "/assets/icon/info_safety.svg";
import info_devices from "/assets/icon/info_devices.svg";

function Section2() {
  const { language } = useLanguage();

  return (
    <Container fluid className="info-s3">
      <div className="body">
        <div>
          <span className="line-with-diamond">
            <div className="diamond"></div>
          </span>
        </div>

        <h1 className="header-text-dark title">
          <GetText
            folder={language}
            page="info"
            section="section2"
            field="toknow"
          />
        </h1>

        {/* inforamation */}
        <Row className="content">
          <Col xs={12} md={12} lg={4}>
            <div className="content-header">
              <img src={info_checking} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xchecking"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xchecking"
                  field="content"
                />
              </p>
            </div>

            <div className="content-header">
              <img src={info_quiethours} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xquiethours"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xquiethours"
                  field="content"
                />
              </p>
            </div>
          </Col>

          <Col xs={12} md={12} lg={4}>
            <div className="content-header">
              <img src={info_notallowed} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xnotallowed"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xnotallowed"
                  field="content"
                />
              </p>
            </div>

            <div className="content-header">
              <img src={info_events} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xevents"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xevents"
                  field="content"
                />
              </p>
            </div>
          </Col>

          <Col xs={12} md={12} lg={4}>
            <div className="content-header">
              <img src={info_safety} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xsafety"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xsafety"
                  field="content"
                />
              </p>
            </div>

            <div className="content-header">
              <img src={info_devices} className="icon" alt="Nearby Icon" />
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xdevices"
                  field="title"
                />
              </p>
            </div>
            <div className="content-body">
              <p className="body-text-dark">
                <GetText
                  folder={language}
                  page="info"
                  section="section3xdevices"
                  field="content"
                />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Section2;
