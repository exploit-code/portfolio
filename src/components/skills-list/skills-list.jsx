import styles from "./skills-list.module.scss";
import { SkillItem } from "../skill-item/skill-item";
import { SectionTitle } from "../section-title/section-title";
import { technologys } from "../../utils/technologys-data";

export const SkillsList = () => {
  return (
    <section className={styles.skills}>
      <SectionTitle text="Навыки" />
      <div className={styles.skills__content}>
        <div className={styles.skills__box}>
          <p className={styles.skills__description}>
            В работе Frontend разработчика необходимо обладать рядом ключевых навыков, которые
            помогут создавать качественные и эффективные веб-сайты и веб-приложения.
          </p>
          <p className={styles.skills__description}>
            Основные технологии, которые я использую в работе:
          </p>
        </div>

        <ul className={styles.skills__box}>
          {technologys.map((technology) => (
            <SkillItem technology={technology} icon={technology.icon} key={technology.uuid} />
          ))}
        </ul>
      </div>
    </section>
  );
};
