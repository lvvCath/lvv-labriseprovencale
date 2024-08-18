import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";

function Section1() {
  const { language } = useLanguage();

  return (
    <section>
      <h1>
        <GetText
          language={language}
          page="homepage"
          section="section1"
          field="content"
        />
      </h1>
      <p>
        <GetText
          language={language}
          page="homepage"
          section="section1"
          field="content"
        />
      </p>
    </section>
  );
}

export default Section1;
