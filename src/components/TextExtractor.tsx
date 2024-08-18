import { useState, useEffect } from "react";

interface TextExtractorProps {
  language: string;
  page: string;
  section: string;
  field: string;
}

function GetText({ language, page, section, field }: TextExtractorProps) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    async function fetchText() {
      try {
        const response = await import(
          `../translations/${language}/${page}.json`
        );
        setText(response[section][field]);
      } catch (error) {
        console.error(
          `Error loading text content for ${page}, section ${section}, field ${field}:`,
          error
        );
        setText(null);
      }
    }

    fetchText();
  }, [language, page, section, field]);

  return <>{text}</>;
}

export default GetText;
