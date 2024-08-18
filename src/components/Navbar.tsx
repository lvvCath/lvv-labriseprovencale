import React from "react";
import { useLanguage } from "./LanguageContext";

export function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("fr")}>Français</button>
      <button onClick={() => setLanguage("zh")}>中文</button>
    </nav>
  );
}
