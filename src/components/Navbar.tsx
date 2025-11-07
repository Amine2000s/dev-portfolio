import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const templateOneData = templateData;
  const { t } = useLanguage();

  return (
    <>
      <nav>
        <ul className="fixed top-4 left-0 right-0 z-40 rounded-full bg-[#211f2a] max-w-[600px] mx-auto flex items-center justify-evenly py-4 flex-wrap gap-2 px-4">
          {templateOneData.NavBar.about && (
            <li>
              <a
                href="#about"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.about")}
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li>
              <a
                href="#projects"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.projects")}
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li>
              <a
                href="#skills"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.skills")}
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li>
              <a
                href="#experience"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.experience")}
              </a>
            </li>
          )}
          {templateOneData.NavBar.education && (
            <li>
              <a
                href="#education"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.education")}
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li>
              <a
                href="#contact"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                {t("navbar.contact")}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
