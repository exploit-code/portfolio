import SassIcon from "../../public/images/sass-icon.svg";
import ReactIcon from "../../public/images/react-icon.svg";
import HtmlIcon from "../../public/images/html-icon.svg";
import JsIcon from "../../public/images/js-icon.svg";
import AlpineIcon from "../../public/images/alpine-icon.svg";
import TSIcon from "../../public/images/ts-icon.svg";
import ReduxIcon from "../../public/images/redux-icon.svg";
import FigmaIcon from "../../public/images/figma-icon.svg";
import NextJsIcon from "../../public/images/nextjs-icon.svg";
import CypressIcon from "../../public/images/cypress-icon.svg";

export const technologys = [
  { name: "Html", modifier: "html", uuid: "html", icon: <HtmlIcon key="HtmlIcon" /> },
  { name: "Scss", modifier: "scss", uuid: "scss", icon: <SassIcon key="SassIcon" /> },
  { name: "JavaScript", modifier: "js", uuid: "js", icon: <JsIcon key="JsIcon" /> },
  { name: "React", modifier: "react", uuid: "react", icon: <ReactIcon key="ReactIcon" /> },
  { name: "Redux", modifier: "redux", uuid: "redux", icon: <ReduxIcon key="ReduxIcon" /> },
  { name: "TypeScript", modifier: "typescript", uuid: "typescript", icon: <TSIcon key="TSIcon" /> },
  { name: "Next.js", modifier: "nextjs", uuid: "nextjs", icon: <NextJsIcon key="NextJsIcon" /> },
  {
    name: "Alpine.js",
    modifier: "alpinejs",
    uuid: "alpinejs",
    icon: <AlpineIcon key="AlpineIcon" />,
  },
  { name: "Figma", modifier: "figma", uuid: "figma", icon: <FigmaIcon key="FigmaIcon" /> },
  { name: "Cypress", modifier: "cypress", uuid: "cypress", icon: <CypressIcon key="CypressIcon" /> },
];
