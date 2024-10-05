import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LINKS } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${scrolled} backdrop-blur-md ${
          menuOpen ? "rounded-t-2xl" : "rounded-full"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-white font-bold text-2xl hover:text-stone-300 transition duration-300"
              >
                mrvndmng
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {LINKS.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="text-white hover:text-stone-300 transition duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-stone-300 transition duration-300 focus:outline-none"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } backdrop-blur-md rounded-b-2xl max-w-7xl mx-auto`}
      >
        <div className="px-4 py-2 space-y-1">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={handleLinkClick}
              className="text-white hover:bg-stone-700/50 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
