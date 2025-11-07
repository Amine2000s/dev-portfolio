// ExperienceCardRight.jsx
import { IoIosArrowForward } from "react-icons/io";
import { ReactElement } from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  foundation: string;
  description: string;
  logo: ReactElement;
  institutionLogo?: ReactElement;
  companyLogo?: string;
}

const ExperienceCardRight = ({
  date,
  title,
  foundation,
  description,
  logo,
  institutionLogo,
  companyLogo,
}: ExperienceCardProps) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 bg-white/20 border-2 rounded-full p-2 z-10">
        {logo}
      </div>
      <div className="relative bg-[#2a292f] p-4 w-[380px] ml-[120px] rounded-2xl">
        {companyLogo && (
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center justify-center backdrop-blur-sm">
            <img
              src={companyLogo}
              alt={`${foundation} logo`}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <IoIosArrowForward
          className="absolute right-[-22px] top-[6px]"
          fontSize={32}
        />
        <div className={companyLogo ? "pr-16" : ""}>
          <p className="text-sm text-gray-300">{date}</p>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-400">{foundation}</p>
            {institutionLogo && (
              <div className="w-6 h-6 flex items-center justify-center">
                {institutionLogo}
              </div>
            )}
          </div>
        </div>
        <div className="text-gray-300 mt-2 whitespace-pre-line">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCardRight;
