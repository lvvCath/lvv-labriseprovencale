import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export function Information() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {/* <Section0 /> */}
      <Section1 />
      <Section2 />
      <Section3 />

      <Footer />
    </div>
  );
}
