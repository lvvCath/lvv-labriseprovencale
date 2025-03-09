import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";
import { HomePage } from "./pages/homepage/Homepage";
import { TheVilla } from "./pages/the_villa/TheVilla";
import { Outdoor } from "./pages/outdoor/Outdoor";
import { ContactUs } from "./pages/contact_us/ContactUs";
import { Information } from "./pages/info/Information";
import { GuestHouse } from "./pages/guest_house/GuestHouse";
import "./constants/constants.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Page transition effect
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div style={{ position: "relative" }}>
      {" "}
      {/* Keeps layout stable */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/thevilla" element={<TheVilla />} />
            <Route path="/guesthouse" element={<GuestHouse />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/information" element={<Information />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
