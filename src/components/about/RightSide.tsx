import Tags from "../ui/Tags";
import Title from "../ui/Title";
import Slider from "../ui/Slider";
import Description from "../ui/Description";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useLanguage } from "../../contexts/LanguageContext";

interface RightSideProps {
  name: {
    content: string;
    gradient: string;
  };
  tags: string[];
  description: {
    content: string;
    highlights: {
      start: number;
      end: number;
      color: string;
    }[];
  };
  resumeButton: {
    resumeLinks?: {
      en?: string;
      fr?: string;
      de?: string;
    };
    resumeLink?: string; // Fallback for old format
    resumeGradient: string;
    resumeColor1: string;
  };
  links: {
    id: string;
    link: string;
    preview: boolean;
  }[];
}

const RightSide = ({
  name,
  tags,
  description,
  resumeButton,
  links,
}: RightSideProps) => {
  const { t, language } = useLanguage();
  
  // Get the resume link based on the current language
  const getResumeLink = () => {
    if (resumeButton.resumeLinks) {
      // Use language-specific resume link, fallback to English if not available
      return resumeButton.resumeLinks[language] || resumeButton.resumeLinks.en || resumeButton.resumeLink || '#';
    }
    // Fallback to old format
    return resumeButton.resumeLink || '#';
  };
  
  const resumeLink = getResumeLink();
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "x":
        return FaXTwitter;
      case "leetcode":
        return SiLeetcode;
      default:
        return FaGithub;
    }
  };

  return (
    <>
      <Tags tags={tags} />
      <Title name={name} />
      <Slider />
      <Description
        highlights={description.highlights}
        content={description.content}
      />
      <div className="flex items-center gap-4 mt-8">
        <div className="relative group">
          <button
            className="relative px-8 py-4 font-bold rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
            style={{
              background: resumeButton.resumeGradient,
              boxShadow: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px -5px ${resumeButton.resumeColor1}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-white to-[#d4fff1] bg-clip-text text-transparent">
                {t("about.viewResume")}
              </span>
              <FaArrowRight />
            </a>
          </button>
        </div>

        <ul className="flex items-center gap-4 ml-2">
          {links
            .filter(({ preview }) => preview)
            .map(({ id, link }) => {
              const IconComponent = getIcon(id);
              return (
                <li
                  className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group text-white"
                  key={id}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <IconComponent
                      fontSize={32}
                      className="drop-shadow-lg transition-all duration-300 hover:scale-110"
                    />
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default RightSide;
