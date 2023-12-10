import styles from "./experience.module.scss";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionTitle } from "../section-title/section-title";
import { works } from "../../utils/works-data";

export const Experience = () => {
  return (
    <section className={styles.experience}>
      <SectionTitle text="Опыт работы" />

      <Tabs className={styles.tabs}>
        <div className={styles.tabs__head}>
          <TabList className={styles.tabs__list}>
            {works.map((item) => (
              <Tab tabIndex="0" className={styles.tabs__title} key={item.uuid}>
                {item.company}
              </Tab>
            ))}
          </TabList>
        </div>
        <div className={styles.tabs__body}>
          {works.map((item, index) => (
            <TabPanel className={styles.tabs__panel} key={index}>
              <div className={styles.tabs__panelTitle}>
                <span>{item.position}</span>
                <Link
                  className={styles.tabs__panelTitle_link}
                  href={item.link}
                  target="_blank"
                  tabIndex="0"
                >
                  @{item.company}
                </Link>
              </div>
              <ul className={styles.tabs__panelList}>
                {item.tasks.map((item, index) => (
                  <li className={styles.tabs__panelListItem} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </section>
  );
};
