import styles from "./hamburger.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

export const Hamburger = ({ isActive, toggleMenu }) => {
  const handleToggleMenu = () => toggleMenu();

  return (
    <button
      className={cn(styles.hamburger, { [styles.hamburger_active]: isActive })}
      onClick={handleToggleMenu}
      aria-label="hamburger-btn"
    >
      <span className={cn(styles.hamburger__line, styles.hamburger__line_top)}></span>
      <span className={cn(styles.hamburger__line, styles.hamburger__line_bottom)}></span>
    </button>
  );
};

Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
