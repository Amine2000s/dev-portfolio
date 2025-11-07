import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Education = () => {
  const data = templateData.Education.education;
  const { t } = useLanguage();
  const translatedEducation = t("education.items") as Array<{
    title: string;
    institution: string;
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

  const getLogoComponent = (item: any) => {
    // Always use graduation cap icon for the timeline circle
    return <FaGraduationCap className="w-6 h-6" />;
  };

  const getInstitutionLogo = (item: any) => {
    // If logoUrl is provided and not empty, render image next to institution name
    if (item.logoUrl && item.logoUrl.trim() !== "") {
      return (
        <img
          src={item.logoUrl}
          alt={`${item.institution} logo`}
          className="w-6 h-6 object-contain"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          onError={(e) => {
            // Hide image if it fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      );
    }
    return null;
  };

  return (
    <section
      id="education"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
    >
      <TitleTwo gradient={templateData.Education.title}>
        {t("education.title")}
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="py-4 space-y-12 relative">
            {data.map((item, index) => {
              const translatedEdu = translatedEducation[index] || item;
              if (item.left === true) {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardLeft
                      date={translatedEdu.period || ""}
                      title={translatedEdu.title}
                      foundation={translatedEdu.institution}
                      description={translatedEdu.description}
                      logo={getLogoComponent(item)}
                      small={false}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardRight
                      date={translatedEdu.period || ""}
                      title={translatedEdu.title}
                      foundation={translatedEdu.institution}
                      description={translatedEdu.description}
                      logo={getLogoComponent(item)}
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
              const translatedEdu = translatedEducation[index] || item;
              return (
                <div key={index} className="relative">
                  <ExperienceCardLeft
                    date={translatedEdu.period || ""}
                    title={translatedEdu.title}
                    foundation={translatedEdu.institution}
                    description={translatedEdu.description}
                    logo={getLogoComponent(item)}
                    small={true}
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

export default Education;

