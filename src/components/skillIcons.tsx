import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
  SiDocker,
  SiApachejmeter,
  SiShadcnui,
  SiMaterialformkdocs,
} from "react-icons/si";
import { HiOutlineServer } from "react-icons/hi";
import { JSX } from "react";

const skillIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  Sass: <FaSass />,
  Webpack: <SiWebpack />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  React: <FaReact />,
  Docker: <SiDocker />,
  NodeJs: <FaNodeJs />,
  Postman: <SiPostman />,
  JMeter: <SiApachejmeter />,
  ShadCn: <SiShadcnui />,
  "Next.js": <SiNextdotjs />,
  "Material UI": <SiMaterialformkdocs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Redux Toolkit": <SiRedux />,
  "VS Code": <FaCode />,
  "CI/CD": <HiOutlineServer />,
  "Socket.io": <SiSocketdotio />,
};

export default skillIcons;
