import styles from "./project-card.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import { projectType } from "../../utils/prop-types";

export const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link} target="_blank" className={styles.project} tabIndex="0">
      <h3 className={styles.project__title}>{project.title}</h3>
      <ul className={styles.project__list}>
        {project.technologies.map((item, index) => (
          <li className={styles.project__listItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape(projectType).isRequired,
};
