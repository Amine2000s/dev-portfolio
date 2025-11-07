import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = () => {
  const data = templateData.Experiences.experience;
  const { t } = useLanguage();
  const translatedExperiences = t("experience.items") as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case "Education":
        return <FaGraduationCap className="w-6 h-6" />;
      case "Development":
        return <FaCode className="w-6 h-6" />;
      case "Programming":
        return <FaLaptopCode className="w-6 h-6" />;
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
    >
      <TitleTwo gradient={templateData.Experiences.title}>
        {t("experience.title")}
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="py-4 space-y-12 relative">
            {data.map((item, index) => {
              const translatedExp = translatedExperiences[index] || item;
              if (item.left === true) {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardLeft
                      date={translatedExp.period || ""}
                      title={translatedExp.title}
                      foundation={translatedExp.company}
                      description={translatedExp.description}
                      logo={getIconComponent(item.icon)}
                      small={false}
                      companyLogo={item.companyLogo}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardRight
                      date={translatedExp.period || ""}
                      title={translatedExp.title}
                      foundation={translatedExp.company}
                      description={translatedExp.description}
                      logo={getIconComponent(item.icon)}
                      companyLogo={item.companyLogo}
                    />
                  </div>
                );
              }
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="absolute w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="space-y-12">
            {data.map((item, index) => {
              const translatedExp = translatedExperiences[index] || item;
              return (
                <div key={index} className="relative">
                  <ExperienceCardLeft
                    date={translatedExp.period || ""}
                    title={translatedExp.title}
                    foundation={translatedExp.company}
                    description={translatedExp.description}
                    logo={getIconComponent(item.icon)}
                    small={true}
                    companyLogo={item.companyLogo}
                  />
                </div>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};

export default Experience;
