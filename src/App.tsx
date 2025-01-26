import { NavBar } from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";
import { HomePage } from "./pages/homepage/Homepage";
import { TheVilla } from "./pages/the_villa/TheVilla";
import "./constants/constants.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outdoor } from "./pages/outdoor/Outdoor";
import { ContactUs } from "./pages/contact_us/ContactUs";
import { Information } from "./pages/info/Information";
import { GuestHouse } from "./pages/guest_house/GuestHouse";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thevilla" element={<TheVilla />} />
          <Route path="/guesthouse" element={<GuestHouse />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
