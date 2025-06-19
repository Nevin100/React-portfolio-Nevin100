/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaUser,
  FaEnvelopeOpenText,
  FaGithubAlt,
  FaLink,
} from "react-icons/fa";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-2 bg-transparent min-h-[800px]">
      {/* Glowing Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-pink-400 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 rounded min-h-[900px]">
        <div
          ref={headerRef}
          className="relative rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-lg shadow-2xl p-6 md:p-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(192,132,252,0.12), rgba(236,72,153,0.06), rgba(135,206,235,0))`,
          }}
        >
          {/* Gradient Borders */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>

          {/* Heading & Icons */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-14 gap-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Me
            </h2>

            <div className="flex gap-8 text-4xl text-white drop-shadow-lg">
              {[
                {
                  href: "https://instagram.com",
                  label: "Instagram",
                  icon: <FaInstagram />,
                },
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  icon: <FaLinkedin />,
                },
                {
                  href: "https://github.com",
                  label: "GitHub",
                  icon: <FaGithub />,
                },
                {
                  href: "mailto:example@mail.com",
                  label: "Email",
                  icon: <FaEnvelope />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`hover:scale-110 transition-transform duration-300 ${
                    label === "Instagram" ? "hover:text-pink-400" : ""
                  } ${label === "LinkedIn" ? "hover:text-blue-400" : ""} ${
                    label === "GitHub" ? "hover:text-gray-300" : ""
                  } ${label === "Email" ? "hover:text-red-400" : ""}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/30 bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
              />
              <label
                htmlFor="name"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Name
              </label>
              <FaUser className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/30 bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Email
              </label>
              <FaEnvelopeOpenText className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                rows="5"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/30 bg-transparent py-4 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none shadow-sm"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Message
              </label>
            </div>

            {/* GitHub ID */}
            <div className="relative">
              <input
                type="text"
                id="github"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/30 bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
              />
              <label
                htmlFor="github"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your GitHub ID
              </label>
              <FaGithubAlt className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Meeting Link */}
            <div className="relative">
              <input
                type="url"
                id="meeting"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/30 bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
              />
              <label
                htmlFor="meeting"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Meeting Link (if any)
              </label>
              <FaLink className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 text-white font-bold py-4 rounded-lg shadow-[0_10px_20px_rgba(120,119,198,0.7)] hover:shadow-[0_15px_30px_rgba(120,119,198,0.9)] hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
