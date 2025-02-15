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

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const handleLoad = () => setIsLoading(false);

    // Wait for images to fully load
    const allImages = Array.from(document.images);
    const imagePromises = allImages.map(
      (img) =>
        new Promise<void>((resolve) =>
          img.complete ? resolve() : (img.onload = () => resolve())
        )
    );

    // Simulate a short text load delay
    const textLoaded = new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 100)
    );

    // Wait for video to load (if any)
    const video = document.querySelector("video");
    const videoLoaded = video
      ? new Promise<void>((resolve) =>
          video.readyState >= 3
            ? resolve()
            : (video.onloadeddata = () => resolve())
        )
      : Promise.resolve();

    Promise.all([...imagePromises, textLoaded, videoLoaded]).then(handleLoad);

    return () => {
      allImages.forEach((img) => (img.onload = null));
      if (video) video.onloadeddata = null;
    };
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
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
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
