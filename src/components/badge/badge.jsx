import styles from "./badge.module.scss";
import Link from "next/link";

export const Badge = ({ text, link }) => {
  return (
    <Link className={styles.badge} href={link} target="_blank" tabIndex="0">
      {text}
    </Link>
  );
};
