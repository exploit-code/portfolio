import { Badge } from "../badge/badge";
import styles from "./courses.module.scss";

export const Courses = () => {
  return (
    <div className={styles.courses}>
      <p className={styles.courses__title}>Последние пройденные курсы:</p>
      <ul className={styles.courses__list}>
        <li className={styles.courses__item}>
          <span className={styles.courses__item_name}>- Frontend-разработчик</span>
          <Badge text={"ГикБреинс"} link={"https://gb.ru/"} />
        </li>
        <li className={styles.courses__item}>
          <span className={styles.courses__item_name}>- React-разработчик</span>
          <Badge text={"Яндекс.Практикум"} link={"https://practicum.yandex.ru/"} />
        </li>
      </ul>
    </div>
  );
};
