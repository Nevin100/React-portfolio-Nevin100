import { useState } from "react";
import logo from "../assets/NevinLogo.png";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  "About",
  "Technologies",
  "Experience",
  "Activities",
  "Projects",
];

const socialIcons = [
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
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="mx-auto flex items-center justify-between
                   py-4 px-4 md:px-8
                   backdrop-blur-md bg-neutral-950/40
                   border-b border-neutral-800 rounded-xl"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Nevin Bali – Full Stack & GenAI Engineer Logo"
            className="w-12 md:w-14"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-medium">
          {navItems.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = pathname === path;

            return (
              <Link
                key={item}
                to={path}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors duration-200
                  ${
                    isActive
                      ? "text-purple-400"
                      : "text-neutral-200 hover:text-purple-400"
                  }`}
              >
                {item}
              </Link>
            );
          })}

          {/* Social Icons */}
          <div className="flex gap-4 text-xl ml-6">
            {socialIcons.map(({ href, label, icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-transform duration-200 hover:scale-110 ${hoverColor}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-purple-400 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute inset-x-0
                     bg-neutral-950/80 backdrop-blur-xl
                     border-b border-neutral-800
                     py-8"
          role="menu"
        >
          <div className="flex flex-col items-center gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-neutral-200 hover:text-purple-400 transition"
                role="menuitem"
              >
                {item}
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl mt-4">
              {socialIcons.map(({ href, label, icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-transform duration-200 hover:scale-110 ${hoverColor}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
