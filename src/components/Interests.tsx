import { Interest } from "./Interest";
// This project data should probably come from an API or something so it can be updated easily
const interestsData = [
  {
    title: "Zephyr Trade",
    description:
      "Crypto and equity investment strategy testing and automation platform with a node-based strategy builder.",
    longDesctiption: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/995/1600/600",
    technologies: ["React", "Numpy", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/zephyr-trade", // This repo is private!
  },
  {
    title: "Kocoon",
    description:
      "Personal finance and investment exploration platform that takes a qualitative and a quantitative approach to financial literacy.",
    longDescription: "",
    status: "development on pause - #1 in queue",
    imageUrl: "https://picsum.photos/seed/997/1600/600",
    technologies: ["React", "MongoDB", "Websockets", "TypeScript", "Python"],
    githubUrl: "https://github.com/ZachZimm/kocoon",
  },
  {
    title: "Fluxnote: An idea-centric note-taking backend",
    description:
      "Fluxnote is an LLM-enhanced notes backend which aims to improve the usefulness of notes or other text-based knowledge in a variety of ways.",
    longDescription: "",
    status: "development on pause, may be returned to",
    imageUrl: "https://picsum.photos/seed/998/1600/600",
    technologies: ["MongoDB", "LangChain", "FastAPI", "Websockets", "Python"],
    githubUrl: "https://github.com/ZachZimm/fluxnote",
  },
  {
    title: "Dashtrade",
    description:
      "Lightweight Python data collection and analysis tool for live monitoring of cryptocurrency order book and prices.",
    longDescription: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/999/1600/600",
    technologies: ["PostgreSQL", "Async", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/dashtrade",
  },
];

export const Interests = () => {
  return (
    <div id="interests" className="py-20 bg-color-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {interestsData.map((interest, index) => (
            <Interest key={index} {...interest} />
          ))}
        </div>
      </div>
    </div>
  );
};
