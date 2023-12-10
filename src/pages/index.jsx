import { Meta } from "../components/meta/meta";
import { About } from "../components/about/about";
import { SkillsList } from "../components/skills-list/skills-list";
import { Experience } from "../components/experience/experience";
import { ProjectsList } from "../components/projects-list/projects-list";

const Home_page = () => {
  return (
    <>
      <Meta />
      <About />
      <SkillsList />
      <Experience />
      <ProjectsList />
    </>
  );
};

export default Home_page;
