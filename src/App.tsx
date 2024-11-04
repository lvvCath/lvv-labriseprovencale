import { NavBar } from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";
import { HomePage } from "./pages/homepage/Homepage";
import { TheVilla } from "./pages/the_villa/TheVilla";
import "./constants/constants.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

function App() {
  return (
    <LanguageProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thevilla" element={<TheVilla />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
