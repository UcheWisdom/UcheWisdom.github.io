import { useState, useEffect } from "react";
import type { NavLink } from "../types";
import profileImg from "../assets/images/profile.jpg";

const navLinks: NavLink[] = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
        <img
          src={profileImg}
          alt="Uchebuaku Wisdom"
          className="w-8 h-8 rounded-full object-cover object-top border border-accent/40"
        />
        <span className="font-sans text-textMain text-xs md:text-sm font-semibold">
          Uchebuaku Wisdom
        </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="text-textMain hover:text-accent transition-colors duration-200 text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            
            <a href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-4 py-2 rounded text-sm hover:bg-accent/10 transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 bg-secondary flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="text-textMain hover:text-accent transition-colors duration-200 text-lg"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            
            <a href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-6 py-3 rounded text-sm hover:bg-accent/10 transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;