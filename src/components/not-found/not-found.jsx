import styles from "./not-found.module.scss";

export const NotFound = () => {
  return (
    <h1 className={styles.notFound}>
      <span className={styles.notFound__code}>404</span>
      <span className={styles.notFound__line}></span>
      <span className={styles.notFound__message}>Страница не найдена.</span>
    </h1>
  );
};
