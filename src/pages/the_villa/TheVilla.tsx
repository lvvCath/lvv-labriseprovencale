import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "../../components/Footer";

export function TheVilla() {
  return (
    <div>
      <Section0 page={"thevilla"} />
      <Section1 page={"thevilla"} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 page={"thevilla"} />
      <Section6 page={"thevilla"} />
      <Footer />
    </div>
  );
}
