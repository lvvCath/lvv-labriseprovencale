import GetText from "../../components/TextExtractor";
import { useLanguage } from "../../components/LanguageContext";

function Section() {
  const { language } = useLanguage();

  return (
    <section>
      <h1>
        <GetText
          folder={language}
          page="homepage"
          section="section1"
          field="content"
        />
      </h1>
      <p>
        <GetText
          folder={language}
          page="homepage"
          section="section1"
          field="content"
        />
      </p>
    </section>
  );
}

export default Section;
