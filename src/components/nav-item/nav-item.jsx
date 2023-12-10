import styles from "./nav-item.module.scss";
import Link from "next/link";
import PropTypes from "prop-types";
import cn from "classnames";
import { navItemType } from "../../utils/prop-types";
import { useRouter } from "next/router";

export const NavItem = ({ navItem, toggleMenu }) => {
  const router = useRouter();
  const handleToggleMenu = () => toggleMenu();

  return (
    <li className={styles.navItem} onClick={handleToggleMenu}>
      <Link
        className={cn(styles.navItem__link, {
          [styles.navItem__link_active]: router.pathname === navItem.link,
        })}
        href={navItem.link}
        role="link"
        tabIndex="0"
      >
        {navItem.title}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  navItem: PropTypes.shape(navItemType).isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
