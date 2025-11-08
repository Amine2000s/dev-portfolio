import ProjectCard from "./ui/ProjectCard";
import TitleTwo from "./ui/TitleTwo";
import templateData from "../../templateOneData.json";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const projects = templateData.Projects.projects;
  const { t } = useLanguage();
  const translatedProjects = t("projects.items") as Array<{ title: string; description: string }>;

  return (
    <section id="projects" className="my-40 sm:my-48 md:my-56 mx-auto max-w-6xl px-4">
      <TitleTwo gradient={templateData.Projects.title}>{t("projects.title")}</TitleTwo>
      <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
        {t("projects.description")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const translatedProject = translatedProjects[index] || project;
          return (
            <ProjectCard
              key={translatedProject.title}
              title={translatedProject.title}
              description={translatedProject.description}
              technologies={project.tech}
              liveDemo={project.liveDemo}
              img={project.imgSrc}
              repo={project.repo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
