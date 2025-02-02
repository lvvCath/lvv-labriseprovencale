import Section0 from "../the_villa/Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "../../components/Footer";

import { useEffect } from "react";

export function Outdoor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Section0 page={"outdoor"} />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
