import "../App.css";
import "../index.css";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";

function HomePage() {
  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100`}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
