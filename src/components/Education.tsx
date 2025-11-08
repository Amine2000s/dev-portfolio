import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
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

  const getLogoComponent = () => {
    // Always use graduation cap icon for the timeline circle
    return <FaGraduationCap className="w-6 h-6" />;
  };

  return (
    <section
      id="education"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
    >
      <TitleTwo gradient={templateData.Education.title}>
        {t("education.title")}
      </TitleTwo>

      {/* Desktop timeline - hidden on mobile/tablet */}
      <div className="hidden xl:block">
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
                    logo={getLogoComponent()}
                    small={false}
                    companyLogo={item.logoUrl}
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
                    logo={getLogoComponent()}
                    companyLogo={item.logoUrl}
                  />
                </div>
              );
            }
          })}
        </ul>
      </div>

      {/* Mobile/Tablet timeline - visible on mobile/tablet */}
      <div className="xl:hidden">
        <div className="absolute left-4 sm:left-8 w-1 h-full bg-white/60" />
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
                    logo={getLogoComponent()}
                    small={true}
                    companyLogo={item.logoUrl}
                  />
                </div>
              );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;

