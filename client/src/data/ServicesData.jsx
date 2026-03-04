import { FaReact } from "react-icons/fa";
import { SiMaterialdesign, SiPeakdesign } from "react-icons/si";
import { MdDesignServices, MdQueueMusic } from "react-icons/md";

export const ServiceData = [
  {
    title: "Frontend Development",
    id: 1,
    icon: <FaReact size={32} />,
    intro:
      "Crafting immersive and dynamic web experiences through modern coding techniques and technologies. I specialize in building interactive user interfaces to bring your web applications to life.",
    list: [
      "Responsive web design",
      "HTML5, CSS3, and JavaScript coding",
      "User interface (UI) development",
      "Frontend frameworks (React)",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
  },
  {
    title: "Web Design",
    id: 2,
    icon: <SiMaterialdesign size={32} />,
    intro:
      "Transforming ideas into visually captivating designs that engage users and deliver a seamless browsing experience.",
    list: [
      "Wireframing and prototyping",
      "Visual design and layout creation",
      "Typography and color scheme selection",
      "Image and multimedia integration",
      "User experience (UX) design",
      "Mobile-friendly and accessible design",
    ],
  },
  {
    title: "Branding",
    id: 3,
    icon: <SiPeakdesign size={32} />,
    intro:
      "From crafting compelling visual identities to defining brand strategies, I help businesses create a consistent and memorable brand presence.",
    list: [
      "Brand strategy development",
      "Logo design and visual identity",
      "Business Plan & Profile",
      "Brand guidelines creation",
      "Business Card design",
      "Brand consistency and implementation",
    ],
  },
  {
    title: "Graphic Design",
    id: 4,
    icon: <MdDesignServices size={32} />,
    intro:
      "Translating concepts into visually stunning designs that communicate your message effectively.",
    list: [
      "Digital design",
      "Brochure and flyer design",
      "Poster and banner design",
      "Infographic creation",
      "Image editing and retouching",
      "T-shirt and merchandise design",
    ],
  },
  {
    title: "Music Production",
    id: 5,
    icon: <MdQueueMusic size={32} />,
    intro:
      "I help artists and creators bring their musical visions to life, producing high-quality tracks across various genres.",
    list: [
      "Composition and arrangement",
      "Recording and mixing",
      "Sound design and sampling",
      "MIDI programming and sequencing",
      "Audio editing and mastering",
      "Music production software (FL Studio)",
    ],
  },
];
