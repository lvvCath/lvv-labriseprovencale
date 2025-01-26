import Section0 from "../the_villa/Section0";
import Section1 from "../the_villa/Section1";
import Section2 from "../the_villa/Section3";
import Section3 from "../the_villa/Section4";
import Section4 from "../the_villa/Section5";
import Section5 from "../the_villa/Section6";
import Footer from "../../components/Footer";

export function GuestHouse() {
  return (
    <div>
      <Section0 page={"guesthouse"} />
      <Section1 page={"guesthouse"} />
      <Section2 />
      <Section3 />
      <Section4 page={"guesthouse"} />
      <Section5 page={"guesthouse"} />
      <Footer />
    </div>
  );
}
