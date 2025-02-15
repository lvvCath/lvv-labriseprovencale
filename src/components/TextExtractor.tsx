import { useState, useEffect } from "react";

interface TextExtractorProps {
  folder: string;
  page: string;
  section: string;
  field: string;
}

function GetText({ folder, page, section, field }: TextExtractorProps) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    async function fetchText() {
      try {
        const response = await import(`../translations/${folder}/${page}.json`);
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
  }, [folder, page, section, field]);

  return (
    <>
      {text?.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default GetText;
