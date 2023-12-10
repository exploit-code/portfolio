import styles from "./section-title.module.scss";
import PropTypes from "prop-types";

export const SectionTitle = ({ text }) => {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
