import { useState } from "react";
import logo from "../assets/NevinLogo.png";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialIcons = [
  {
    href: "https://www.instagram.com/nevin_bali_777?igsh=bHh4Z2RpdWRyYXdj",
    label: "Instagram",
    icon: <FaInstagram />,
    hoverColor: "hover:text-pink-400",
  },
  {
    href: "https://www.linkedin.com/in/nevinbali1012/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    hoverColor: "hover:text-blue-400",
  },
  {
    href: "https://github.com/Nevin100",
    label: "GitHub",
    icon: <FaGithub />,
    hoverColor: "hover:text-gray-300",
  },
  {
    href: "mailto:nevinbali10@mail.com",
    label: "Email",
    icon: <FaEnvelope />,
    hoverColor: "hover:text-red-400",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-8 bg-transparent relative z-20">
      {/* Logo */}
      <div className="flex items-center">
        <Link to={"/"}>
          <img className="w-14" src={logo} alt="Nevin Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-9 items-center text-xl font-medium">
        {["About", "Technologies", "Experience", "Activities", "Projects"].map(
          (item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {item}
            </Link>
          )
        )}

        {/* Social Icons - Desktop */}
        <div className="flex gap-4 text-2xl ml-4">
          {socialIcons.map(({ href, label, icon, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-transform duration-300 hover:scale-110 ${hoverColor}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Hamburger Icon - Mobile */}
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
          {[
            "About",
            "Technologies",
            "Experience",
            "Activities",
            "Projects",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Social Icons - Mobile */}
          <div className="flex gap-6 text-3xl mt-2">
            {socialIcons.map(({ href, label, icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-transform duration-300 hover:scale-110 ${hoverColor}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
