import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        const response = await fetch(
          `/assets/translations/${folder}/${page}.json`
        );

        if (!response.ok) {
          throw new Error(`Failed to load ${page}.json`);
        }

        const data = await response.json();
        setText(data?.[section]?.[field] || null);
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
    <motion.span
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {text?.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </span>
      ))}
    </motion.span>
  );
}

export default GetText;
