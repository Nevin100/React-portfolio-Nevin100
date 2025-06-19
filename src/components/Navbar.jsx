import { useState } from "react";
import logo from "../assets/NevinLogo.png";
import { FaLinkedin, FaGithubSquare, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-8 bg-transparent relative z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-14" src={logo} alt="Nevin Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-9 items-center text-xl font-medium">
        <Link to="/" className="hover:text-purple-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-purple-400 transition">
          About
        </Link>
        <Link to="/technologies" className="hover:text-purple-400 transition">
          Technologies
        </Link>
        <Link to="/experience" className="hover:text-purple-400 transition">
          Experience
        </Link>
        <Link to="/opensource" className="hover:text-purple-400 transition">
          Activities
        </Link>
        <Link to="/projects" className="hover:text-purple-400 transition">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-purple-400 transition">
          Contact
        </Link>
        <a
          href="https://github.com/Nevin100"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-purple-400 transition"
          aria-label="GitHub Profile"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/nevin-bali-aa744a2b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-purple-400 transition"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Hamburger Icon - mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-3xl text-purple-400 focus:outline-none z-30"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-6 text-xl font-medium lg:hidden z-20">
          <Link
            to="/"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/technologies"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </Link>
          <Link
            to="/experience"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/opensource"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Activities
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="flex gap-6 text-3xl mt-4">
            <a
              href="https://github.com/Nevin100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="GitHub Profile"
              onClick={() => setIsOpen(false)}
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/nevin-bali-aa744a2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="LinkedIn Profile"
              onClick={() => setIsOpen(false)}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
