import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import { FaCoffee, FaTerminal } from "react-icons/fa";
import { ReactElement } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiGatsby,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiElasticsearch,
  SiJest,
  SiMocha,
  SiCypress,
  SiSelenium,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWebpack,
  SiVite,
  SiSass,
  SiLess,
  SiStyledcomponents,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiReactivex,
  SiGraphql,
  SiApollographql,
  SiElixir,
  SiGo,
  SiRust,
  SiWebgl,
  SiThreedotjs,
  SiElectron,
  SiRaspberrypi,
  SiArduino,
  SiLinux,
} from "react-icons/si";

// Custom C Language Logo Component - Stylized "C" letter
const CLogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="12" y="18" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">C</text>
  </svg>
);

interface SkillCardProps {
  icon: string;
  name: string;
  color: string;
  index: number;
  isEditing?: boolean;
  onDelete?: (name: string) => void;
}

const getIconComponent = (iconName: string): IconType | ((props: any) => ReactElement) => {
  const iconMap: { [key: string]: IconType | ((props: any) => ReactElement) } = {
    TbBrandCpp,
    SiC: CLogoIcon, // Custom C language logo
    SiJava: FaCoffee, // Java is often represented by coffee icon
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiGithub,
    SiGit,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiDjango,
    SiFlask,
    SiSpring,
    SiPhp,
    SiSharp,
    SiDotnet,
    SiRuby,
    SiRubyonrails,
    SiVuedotjs,
    SiAngular,
    SiSvelte,
    SiNuxtdotjs,
    SiGatsby,
    SiFirebase,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiGrafana,
    SiElasticsearch,
    SiJest,
    SiMocha,
    SiCypress,
    SiSelenium,
    SiFigma,
    SiAdobexd,
    SiAdobephotoshop,
    SiWordpress,
    SiShopify,
    SiWebpack,
    SiVite,
    SiSass,
    SiLess,
    SiStyledcomponents,
    SiSwift,
    SiKotlin,
    SiDart,
    SiFlutter,
    SiReactivex,
    SiGraphql,
    SiApollographql,
    SiElixir,
    SiGo,
    SiRust,
    SiWebgl,
    SiThreedotjs,
    SiElectron,
    SiRaspberrypi,
    SiArduino,
    SiLinux,
    SiGnubash: FaTerminal, // Using terminal icon for Bash
  };

  return iconMap[iconName] || SiReact;
};

const SkillCard = ({ icon, name, color, index }: SkillCardProps) => {
  const IconComponent = getIconComponent(icon);
  const isCustomComponent = typeof IconComponent === 'function' && icon === 'SiC';

  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 bg-[#1a191e] rounded-lg 
      transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 hover:-translate-y-2
      opacity-0 animate-fade-in-up shadow-[0_0_20px_transparent] hover:shadow-[0_0_20px]`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className={`text-4xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 
        relative z-10 w-10 h-10 flex items-center justify-center`}
        style={{ color }}
      >
        {isCustomComponent ? (
          <IconComponent className="w-full h-full" />
        ) : (
          <IconComponent />
        )}
      </div>

      <span
        className={`absolute text-white font-medium text-lg bottom-2
        transition-all duration-300 group-hover:bottom-4`}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
