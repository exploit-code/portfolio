import styles from "./mobile-menu.module.scss";
import Link from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavItem } from "../nav-item/nav-item";
import { Button } from "../button/button";
import { navItemType } from "../../utils/prop-types";

export const MobileMenu = ({ isActive, navData, toggleMenu }) => {
  useEffect(() => {
    document.body.className = isActive ? "locked" : "unlocked";
  }, [isActive]);

  return (
    <div className={cn(styles.mobileMenu, { [styles.mobileMenu_active]: isActive })}>
      <nav className={styles.mobileMenu__nav}>
        <ul className={styles.mobileMenu__list}>
          {navData.map((navItem, index) => (
            <NavItem navItem={navItem} key={index} toggleMenu={toggleMenu} />
          ))}
        </ul>
        <div className={styles.mobileMenu__buttons}>
          <Link href="https://t.me/bug_dev" target="_blank">
            <Button text="Написать сообщение" modifier="default" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  navData: PropTypes.arrayOf(PropTypes.shape(navItemType)).isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
