import styles from "./nav-list.module.scss";
import PropTypes from "prop-types";
import { NavItem } from "../nav-item/nav-item";
import { navItemType } from "../../utils/prop-types";

export const NavList = ({ navData, toggleMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navData.map((navItem, index) => (
          <NavItem navItem={navItem} key={index} toggleMenu={toggleMenu} />
        ))}
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  navData: PropTypes.arrayOf(PropTypes.shape(navItemType)).isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
