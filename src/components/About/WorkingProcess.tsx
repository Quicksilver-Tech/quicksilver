import { Feature } from "@/types/feature";
import { FaSearch, FaLightbulb, FaCogs, FaRocket } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaSearch className="h-full w-full" />,
    title: "Research Projects",
    paragraph:
      "Research. We select an expert team to help you deliver your goals",
  },
  {
    id: 2,
    icon: <FaLightbulb className="h-full w-full" />,
    title: "Find Ideas",
    paragraph:
      "Our team partners with you to effectively shape your business idea.",
  },
  {
    id: 3,
    icon: <FaCogs className="h-full w-full" />,
    title: "Project set-up",
    paragraph:
      "We ensure that your project has the tools and processes needed to succeed",
  },
  {
    id: 4,
    icon: <FaRocket className="h-full w-full" />,
    title: "Project kickoff",
    paragraph:
      "We work with you to successfully create a game-changing software product.",
  }
];
export default featuresData;
