import styles from "./layout.module.scss";
import PropTypes from "prop-types";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
