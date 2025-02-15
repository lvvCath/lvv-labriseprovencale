import Section0 from "../the_villa/Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "../../components/Footer";

export function Outdoor() {
  return (
    <div>
      <Section0 page={"outdoor"} />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
