import { useLanguage } from "../../contexts/LanguageContext";

const SkillsDescription = () => {
  const { t } = useLanguage();
  return (
    <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
      {t("skills.description")}
    </p>
  );
};

export default SkillsDescription;
