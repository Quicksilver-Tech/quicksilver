import { Feature } from "@/types/feature";
import { FaCode, FaLink, FaMobileAlt, FaWordpress } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <FaCode className="h-full w-full" />
    ),
    title: "Web Development",
    paragraph:
      "Deliver maximum value to your business with stunning custom web or mobile software. We help ambitious brands grow by transforming and accelerating the digital customer experience",
  },
  {
    id: 1,
    icon: (
      <FaMobileAlt className="h-full w-full" />
    ),
    title: "Mobile App Development",
    paragraph:
      "We offer a full cycle of application design, integration and management services. The company leads the entire mobile app development process from ideation and concept to delivery.",
  },
  {
    id: 1,
    icon: (
      <FaLink className="h-full w-full" />
    ),
    title: "Blockchain Development",
    paragraph:
      "Our developers can combine Artificial Intelligence (AI) and Blockchain to more effectively secure data, establish ownership, optimize smart contracts, and track goods.",
  },
  {
    id: 1,
    icon: (
      <FaWordpress className=" h-full w-full" />
    ),
    title: "Wordpress Development",
    paragraph:
      "Our team of skilled engineers creates highly customizable templates for clients’ websites to ensure a unique experience and help them distinguish themselves from their competitors. We offer customized plugins, extensions, and tailor-made WordPress websites.",
  }
];
export default featuresData;
