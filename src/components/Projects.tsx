import { Project } from "./Project";
import { Card } from "./ui/card";
// This project data should probably come from an API or something so it can be updated easily
const projectsData = [
  {
    title: "Zephyr Trade",
    description:
      "Crypto and equity investment strategy testing and automation platform with a node-based strategy builder.",
    longDescription: "Zephyr Trade is a local, config‑file driven platform for designing, backtesting and (in principle) automating crypto and equity strategies. At its core is a node‑based strategy builder where you define every asset, data source, indicator and interaction in JSON. The engine can run historical backtests on your data and is wired up to execute live orders via Kraken API keys (live trading is still untested). There’s a lot more that could be built—but the basic pieces are in place: strategy interpretation, data ingestion, backtesting and, execution hooks. Future work will focus on validating live execution, integrating other deep-learning work I've been doing, expanding built‑in indicators, and building a user-interface, but even today Zephyr Trade offers a flexible foundation for experimenting with and comparing custom quantitative strategies.",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/996/800/600",
    technologies: ["React", "Numpy", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/zephyr-trade", // This repo is private!
  },
  {
    title: "Kocoon",
    description:
      "Personal finance and investment exploration platform that takes a qualitative and a quantitative approach to financial literacy. The WIP demo is available at host.zzimm.com/",
    longDescription: "",
    status: "development on pause - #1 in queue",
    imageUrl: "https://picsum.photos/seed/2/800/600",
    technologies: ["React", "MongoDB", "Websockets", "TypeScript", "Python"],
    githubUrl: "https://github.com/ZachZimm/kocoon",
  },
  {
    title: "Fluxnote: An idea-centric note-taking backend",
    description:
      "Fluxnote is an LLM-enhanced notes backend which aims to improve the usefulness of notes or other text-based knowledge in a variety of ways.",
    longDescription: "Fluxnote is a backend service built around the simple idea that notes shouldn’t live as static documents but as interconnected concepts you can explore, question and expand. At its heart, Fluxnote uses an LLM to parse your raw text into discrete “idea” nodes—snippets of meaning that get stored in a lightweight knowledge graph rather than a monolithic file. From there, you can automatically generate Socratic questions, surface contradictions or alternative viewpoints, and discover new lines of inquiry without ever leaving your notes. \nInspired by Socrates’ relentless questioning and Heraclitus’ emphasis on constant flux, Fluxnote was born out of the frustration of taking notes that felt dead on the page. By treating ideas as first‑class objects, it reduces friction between what you write and what you remember. Today Fluxnote already handles idea extraction, embedding‑based linking, semantic search and LLM‑driven questioning; next up is fine‑tuning the AI prompts, enriching the graph API and smoothing out developer ergonomics so every note you take immediately becomes a living, navigable web of thoughts.",
    status: "development on pause, may be returned to",
    imageUrl: "https://picsum.photos/seed/3/800/600",
    technologies: ["MongoDB", "LangChain", "FastAPI", "Websockets", "Python"],
    githubUrl: "https://github.com/ZachZimm/fluxnote",
  },
  {
    title: "Dashtrade",
    description:
      "Lightweight Python data collection and analysis tool for live monitoring of cryptocurrency order book and prices.",
    longDescription: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/4/800/600",
    technologies: ["PostgreSQL", "Async", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/dashtrade",
  },
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience in software engineering and web development.",
    longDescription: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/6/800/600",
    technologies: [
      "React",
      "Stable Diffusion",
      "Llama",
      "MongoDB",
      "TypeScript",
      "Python",
    ],
    githubUrl: "https://github.com/ZachZimm/wallpaper-generator",
  },
  {
    title: "Wallpaper generator",
    description:
      "Web platform for generating hi-res wallpapers using a self-hosted ComfyUI backend and optionally enhancing prompts with a local LLM.",
    longDescription: "",
    status: "development complete",
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
    title: "Pytrade",
    description:
      "My first serious project, a Python trading bot that connects to the Kraken websocket API and executes trades based on custom backtested strategy - with a React UI. Hosted on my first server too!",
    longDescription: "",
    status: "development complete",
    imageUrl: "https://picsum.photos/seed/7/800/600",
    technologies: ["Websockets", "React", "FastAPI", "Python", "JavaScript"],
    githubUrl: "https://github.com/ZachZimm/pytrade",
  },
  {
    title: "Godot Blackjack game",
    description:
      "Graphical blackgack game made with the Godot engine featuring both hotkey and drag & drop controls.",
    longDescription: "",
    status: "development complete",
    imageUrl: "https://picsum.photos/seed/8/800/600",
    technologies: ["Godot", "GDScipt"],
    githubUrl: "https://github.com/ZachZimm/blackjack",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <Card className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        {/* </Card> */}
        </div>
      </div>
    </div>
  );
};
