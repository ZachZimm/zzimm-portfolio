import { Interest } from "./Interest";
// This project data should probably come from an API or something so it can be updated easily
const interestsData = [
  {
    title: "What I'm reading - Neuromancer",
    description:
      "Imagining an 80's future where the internet is a virtual reality and hackers are the new cowboys. The 1984 sci-fi classic that coined the term 'cyberspace'.",
    longDesctiption: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/995/1600/600",
    technologies: ["React", "Numpy", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/zephyr-trade", // This repo is private!
  },
  {
    title: "Linux and other people's open source projects",
    description:
      "Linux is my favorite operating system. I run it on my desktop and servers, and use all sorts of open source software, hosting all kinds of services from LLM inference, to a metasearch engine, and audiobook server.",
    longDescription: "",
    status: "development on pause - #1 in queue",
    imageUrl: "https://picsum.photos/seed/300/1600/600",
    technologies: ["React", "MongoDB", "Websockets", "TypeScript", "Python"],
    githubUrl: "https://github.com/ZachZimm/kocoon",
  },
  {
    title: "Podcasts - the new radio",
    description:
      "I listen to lots of podcasts about all sorts of things- from buisness and tech news to philosophy and history. I'm always looking for new recommendations. Expand to see my favorites!",
    longDescription: "",
    status: "development on pause - #1 in queue",
    imageUrl: "https://picsum.photos/seed/889/1600/600",
    technologies: ["React", "MongoDB", "Websockets", "TypeScript", "Python"],
    githubUrl: "https://github.com/ZachZimm/kocoon",
  },
  {
    title: "Studying computer science and engineering at UNR",
    description:
      "I'm a student at the University of Nevada, Reno, studying computer science and engineering. I'm also pursuing minors in both philosophy and math.",
    longDescription: "",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/999/1600/600",
    technologies: ["PostgreSQL", "Async", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/dashtrade",
  },
  {
    title: "My dog, Felix",
    description:
      "Felix is my 3 year old rescue dog. He's a mix of a few breeds, but mostly a german shepherd. He loves to go on walks and play with the neighborhood dogs at the park.",
    longDescription: "",
    status: "development on pause, may be returned to",
    imageUrl: "https://picsum.photos/seed/998/1600/600",
    technologies: ["MongoDB", "LangChain", "FastAPI", "Websockets", "Python"],
    githubUrl: "https://github.com/ZachZimm/fluxnote",
  },
];

export const Interests = () => {
  return (
    <div id="interests" className="py-20 bg-accent">
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
