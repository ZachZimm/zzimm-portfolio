import { Project } from "./Project";

const projectsData = [
  {
    title: "Zephyr Trade",
    description:
      "Crypto and equity investment strategy testing and automation platform with a node-based strategy builder.",
    longDesctiption: "",
    status: "Under active development",
    imageUrl: "https://picsum.photos/seed/1/800/600",
    technologies: ["React", "Numpy", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/zephyr-trade", // This repo is private!
  },
  {
    title: "Kocoon",
    description:
      "Personal finance and investment exploration platform that takes a qualitative and a quantitative approach to financial literacy.",
    longDescription: "",
    status: "Development on pause - #1 in queue",
    imageUrl: "https://picsum.photos/seed/2/800/600",
    technologies: ["React", "MongoDB", "Websockets", "TypeScript", "Python"],
    githubUrl: "https://github.com/ZachZimm/kocoon",
  },
  {
    title: "Fluxnote: An idea-centric note-taking backend",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    longDescription: "",
    status: "Development on pause, may be returned to",
    imageUrl: "https://picsum.photos/seed/3/800/600",
    technologies: ["MongoDB", "LangChain", "FastAPI", "Websockets", "Python"],
    githubUrl: "https://github.com/ZachZimm/fluxnote",
  },
  {
    title: "Dashtrade",
    description:
      "Lightweight Python data collection and analysis tool for live monitoring of cryptocurrency order book and prices.",
    longDescription: "",
    status: "Under active development",
    imageUrl: "https://picsum.photos/seed/4/800/600",
    technologies: ["PostgreSQL", "Async", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/dashtrade",
  },
  {
    title: "Wallpaper generator",
    description:
      "Web platform for generating hi-res wallpapers using a self-hosted ComfyUI backend and optionally enhancing prompts with a local LLM.",
    longDescription: "",
    status: "Development complete",
    imageUrl: "https://picsum.photos/seed/5/800/600",
    technologies: [
      "React",
      "Stable Diffusion",
      "Llama",
      "MongoDB",
      "TypeScript",
      "Python",
    ],
    githubUrl: "https://github.com/ZachZimm/no-repo",
  },
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience in software engineering and web development.",
    longDescription: "",
    status: "Development complete",
    imageUrl: "https://picsum.photos/seed/5/800/600",
    technologies: [
      "React",
      "Stable Diffusion",
      "Llama",
      "MongoDB",
      "TypeScript",
      "Python",
    ],
    githubUrl: "https://github.com/ZachZimm/no-repo",
  },
  {
    title: "Godot Blackjack game",
    description:
      "Graphical blackgack game made with the Godot engine featuring both hotkey and drag & drop controls.",
    longDescription: "",
    status: "Development complete",
    imageUrl: "https://picsum.photos/seed/6/800/600",
    technologies: ["Godot", "GDScipt"],
    githubUrl: "https://github.com/ZachZimm/blackjack",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-color-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
