import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="text-neutral-300 overflow-x-hidden antialiased selection:cyan-100 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full bg-cover">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto p-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
