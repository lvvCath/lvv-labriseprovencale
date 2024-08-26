import { NavBar } from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";
import { HomePage } from "./pages/homepage/Homepage";
import "./constants/constants.css";
// import NavMain from "./nav-main";

function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <HomePage />
    </LanguageProvider>
  );
}

export default App;
