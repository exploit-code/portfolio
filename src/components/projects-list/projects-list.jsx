import styles from "./projects-list.module.scss";
import { ProjectCard } from "../project-card/project-card";
import { SectionTitle } from "../section-title/section-title";
import { projects } from "../../utils/projects-data";

export const ProjectsList = () => {
  return (
    <section className={styles.projects}>
      <SectionTitle text="Проекты" />
      <div className={styles.projects__list}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.uuid} />
        ))}
      </div>
    </section>
  );
};
