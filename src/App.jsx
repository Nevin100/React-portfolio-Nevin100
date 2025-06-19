import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
// import Contacts from "./components/Contacts.jsx";
import Activities from "./components/Activities.jsx";

const App = () => {
  return (
    <Router>
      <div className="text-neutral-300 overflow-x-hidden antialiased selection:cyan-100 selection:text-cyan-900 scroll-smooth min-h-screen">
        <div className="fixed top-0 -z-10 h-full w-full bg-cover">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        {/* removed overflow-hidden here */}
        <div className="container mx-auto p-8 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contacts />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
