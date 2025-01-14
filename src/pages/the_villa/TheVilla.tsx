import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "../../components/Footer";

export function TheVilla() {
  return (
    <div>
      <Section0 page={"thevilla"} />
      <Section1 page={"thevilla"} />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
