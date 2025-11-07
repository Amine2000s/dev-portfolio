import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const templateOneData = templateData;
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or on scroll
  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('nav')) {
          setIsMenuOpen(false);
        }
      };

      const handleScroll = () => {
        setIsMenuOpen(false);
      };

      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMenuOpen]);

  const navItems = [
    { key: "about", condition: templateOneData.NavBar.about, href: "#about" },
    { key: "projects", condition: templateOneData.NavBar.projects, href: "#projects" },
    { key: "skills", condition: templateOneData.NavBar.skills, href: "#skills" },
    { key: "experience", condition: templateOneData.NavBar.experience, href: "#experience" },
    { key: "education", condition: templateOneData.NavBar.education, href: "#education" },
    { key: "contact", condition: templateOneData.NavBar.contact, href: "#contact" },
  ].filter(item => item.condition);

  return (
    <>
      <nav>
        {/* Desktop Navbar - hidden on mobile */}
        <ul className="hidden md:flex fixed top-2 sm:top-4 left-0 right-0 z-40 rounded-full bg-[#211f2a] max-w-[600px] mx-auto items-center justify-evenly py-2 sm:py-3 md:py-4 gap-1 sm:gap-2 px-2 sm:px-4">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-sm sm:text-base md:text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t(`navbar.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-[#211f2a] border border-white/10 hover:bg-[#2a292f] transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5 text-white" />
          ) : (
            <FaBars className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-[#1a191e]/95 backdrop-blur-sm transition-all duration-300"
            onClick={closeMenu}
          >
            <div
              className="absolute top-20 right-4 bg-[#211f2a] rounded-2xl border border-white/10 shadow-2xl min-w-[200px] max-w-[280px] transition-all duration-300 transform translate-y-0 opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
            <ul className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-3 text-base font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                    style={{
                      animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {t(`navbar.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
