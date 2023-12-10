import styles from "./about.module.scss";
import Link from "next/link";
import { Button } from "../button/button";

export const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>Привет, меня зовут Александр!</h1>
      <h2 className={styles.about__subtitle}>
        Рад представить свое портфолио в качестве Frontend-разработчика.
      </h2>
      <div className={styles.about__description}>
        <p className={styles.about__text}>
          Моя работа заключается в создании пользовательских интерфейсов для веб-приложений, сайтов
          и других цифровых продуктов. Основная задача - перевести дизайнерские макеты в
          интерактивные страницы, которые пользователи могут использовать для взаимодействия с
          продуктом.
        </p>
        <p className={styles.about__text}>
          В моем портфолио вы найдете проекты, в которых я принимал участие, и которые я создавал с
          нуля.
        </p>
      </div>
      <div className={styles.about__btn}>
        <Link href="https://t.me/bug_dev" target="_blank" tabIndex="0">
          <Button text="Написать сообщение" modifier="default" />
        </Link>
      </div>
    </section>
  );
};
