import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";
import { HomePage } from "./pages/homepage/Homepage";
import { TheVilla } from "./pages/the_villa/TheVilla";
import { Outdoor } from "./pages/outdoor/Outdoor";
import { ContactUs } from "./pages/contact_us/ContactUs";
import { Information } from "./pages/info/Information";
import { GuestHouse } from "./pages/guest_house/GuestHouse";
import LoadingScreen from "./components/LoadingScreen";
import "./constants/constants.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Wait for fonts and images to load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/thevilla" element={<TheVilla />} />
              <Route path="/guesthouse" element={<GuestHouse />} />
              <Route path="/outdoor" element={<Outdoor />} />
              <Route path="/information" element={<Information />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </>
        )}
      </Router>
    </LanguageProvider>
  );
}

export default App;
