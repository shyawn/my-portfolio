import { useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import HomePage from "./pages/HomePage";
import Conference from "./pages/Conference";
import { Routes, Route, useLocation } from "react-router-dom";

const withouSidebarRoutes = ["/my-portfolio/conference"];
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {!isLoaded &&
        withouSidebarRoutes.some((item) => pathname.includes(item)) &&
        setIsLoaded(true)}
      {!isLoaded &&
        !withouSidebarRoutes.some((item) => pathname.includes(item)) && (
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/my-portfolio" element={<HomePage />} />
          <Route path="/my-portfolio/conference" element={<Conference />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
