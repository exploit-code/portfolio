import styles from "./header.module.scss";
import { NavList } from "../nav-list/nav-list";
import { Hamburger } from "../hamburger/hamburger";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { ThemeChanger } from "../theme-changer/theme-changer";
import { navData } from "../../utils/nav-data";
import { useMobileMenu } from "../../hooks/useMobileMenu";

export const Header = () => {
  const { isActive, toggleMenu } = useMobileMenu();

  return (
    <header className={styles.header}>
      <NavList navData={navData} toggleMenu={toggleMenu} />
      <Hamburger isActive={isActive} toggleMenu={toggleMenu} />
      <ThemeChanger />
      <MobileMenu isActive={isActive} toggleMenu={toggleMenu} navData={navData} />
    </header>
  );
};
