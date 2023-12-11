import { v4 as uuidv4 } from "uuid";
import SassIcon from "../../public/images/sass-icon.svg";
import ReactIcon from "../../public/images/react-icon.svg";
import HtmlIcon from "../../public/images/html-icon.svg";
import JsIcon from "../../public/images/js-icon.svg";
import AlpineIcon from "../../public/images/alpine-icon.svg";
import TSIcon from "../../public/images/ts-icon.svg";
import ReduxIcon from "../../public/images/redux-icon.svg";

export const projects = [
  {
    link: "https://fake-shop-exploit-code.vercel.app/",
    title: "Fake-Shop",
    technologies: [
      <ReactIcon key="ReactIcon" />,
      <ReduxIcon key="ReduxIcon" />,
      <SassIcon key="SassIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://github-search-ruddy.vercel.app/",
    title: "GitHub Users Search",
    technologies: [
      <ReactIcon key="ReactIcon" />,
      <TSIcon key="TSIcon" />,
      <ReduxIcon key="ReduxIcon" />,
      <SassIcon key="SassIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://drweb.africa/landing/partner_demo",
    title: "Become a partner of the Doctor Web brand",
    technologies: [
      <HtmlIcon key="HtmlIcon" />,
      <SassIcon key="SassIcon" />,
      <AlpineIcon key="AlpineIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://www.drweb.cn/landing/promo_drweb",
    title: "Dr.Web Security Space",
    technologies: [
      <HtmlIcon key="HtmlIcon" />,
      <SassIcon key="SassIcon" />,
      <JsIcon key="JsIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://drweb.africa/landing/products_home",
    title: "Protect your world",
    technologies: [
      <HtmlIcon key="HtmlIcon" />,
      <SassIcon key="SassIcon" />,
      <AlpineIcon key="AlpineIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://bio-sigma.vercel.app",
    title: "Resume v.1",
    technologies: [<ReactIcon key="ReactIcon" />, <SassIcon key="SassIcon" />],
    uuid: uuidv4(),
  },
  {
    link: "https://products.drweb.ru/biz/v4",
    title: "License Builder",
    technologies: [
      <HtmlIcon key="HtmlIcon" />,
      <SassIcon key="SassIcon" />,
      <JsIcon key="JsIcon" />,
      <AlpineIcon key="AlpineIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://www.freeantivirusdownloads.com",
    title: "Free anti-virus Dr.Web",
    technologies: [
      <HtmlIcon key="HtmlIcon" />,
      <SassIcon key="SassIcon" />,
      <JsIcon key="JsIcon" />,
      <AlpineIcon key="AlpineIcon" />,
    ],
    uuid: uuidv4(),
  },
  {
    link: "https://estore.drweb.ru/promomobile",
    title: "Dr.Web Security Space for Android",
    technologies: [<HtmlIcon key="HtmlIcon" />, <SassIcon key="SassIcon" />],
    uuid: uuidv4(),
  },
];
