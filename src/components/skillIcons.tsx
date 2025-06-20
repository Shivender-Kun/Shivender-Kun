import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaStripe,
  // FaJs,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiExpress,
  SiMongodb,
  SiJira,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { HiOutlineServer } from "react-icons/hi";
import { JSX } from "react";

const skillIcons: Record<string, JSX.Element> = {
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Shadcn UI": <SiTailwindcss />,
  "Redux Toolkit": <SiRedux />,
  TypeScript: <SiTypescript />,
  Sass: <FaSass />,
  Webpack: <SiWebpack />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  "REST APIs": <MdHttp />,
  "AWS EC2": <FaAws />,
  S3: <FaAws />,
  CloudFront: <FaAws />,
  ECS: <FaAws />,
  Route53: <FaAws />,
  "GitHub Actions": <FaGithub />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "VS Code": <FaCode />, // ✅ REPLACED
  Jira: <SiJira />,
  OAuth: <BsFillLockFill />,
  "Stripe Integration": <FaStripe />,
  "CI/CD": <HiOutlineServer />,
  "Socket.io": <SiSocketdotio />,
};

export default skillIcons;
