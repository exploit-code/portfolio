import styles from "./skill-item.module.scss";
import PropTypes from "prop-types";
import { technologysType } from "../../utils/prop-types";

export const SkillItem = ({ technology, icon }) => {
  return (
    <li className={styles.skill}>
      {icon}
      <span className={styles.skill__text}>{technology.name}</span>
    </li>
  );
};

SkillItem.propTypes = {
  technology: PropTypes.shape(technologysType).isRequired,
};
