import { Interest } from "./Interest";
// This project data should probably come from an API or something so it can be updated easily
const interestsData = [
  {
    title: "What I'm reading - King Dollar by Paul Blustein",
    description: "In 'King Dollar: The Past and Future of the World's Dominant Currency,' Paul Blustein explores the history and future of the US dollar as the world's reserve currency. He delves into the economic, political, and social implications of this status, examining how it has shaped global finance and power relations.",
    longDescription: "\n\nAlso Reading: Advances in Financial Machine Learning by Marcos López de Prado\n I'm slowly working my way through this one, as I am implementing some of the ideas that the author mentions, as well as building a high-resolution crypto market dataset (~200 GB / Month) for training models. \n\nRecent reads: \n\nNeuromancer by William Gibson\nI just finished reading Neuromancer by William Gibson, a classic of the cyberpunk genre. The book is set in a dystopian future where the internet is a virtual reality and hackers are the new cowboys. It's a fast-paced, action-packed story that explores themes of technology, identity, and the nature of reality. I highly recommend it to anyone interested in science fiction or cyberpunk.",
    status: "under active development",
    imageUrl: "https://picsum.photos/seed/995/1600/600",
    technologies: ["React", "Numpy", "FastAPI", "Python"],
    githubUrl: "https://github.com/ZachZimm/zephyr-trade", // This repo is private!
  },
  {
    title: "Linux and the open source ecosystem",
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
    longDescription: "My subscription list is always increasing, but here are some highlights:\n\nHistory: Dan Carlin's Hardcore History - A deep dive into historical events and figures, with a focus on storytelling and analysis.\n\nLinux: Linux Unplugged - A Linux talkshow that covers the latest news and developments in the Linux world, with a focus on community and open source software.\n\nNews: The Daily Inference - An AI-generated podcast that I create each morning using a PDF of the Wall Street Journal and some custom code with a few LLM calls and a TTS system to narrate the script.\n\nPhilosophy: Philosophize This! - A podcast that explores the ideas and works of philosophers throughout history, keeping the discussion grounded in the context of modern life.\n\nEconomics: Macro Musings - Hosted by economist David Beckworth, with each episode featuring a guest, this show unpacks contemporary economic issues, policy debates, and monetary theory in an accessible way for both beginners and experts.\n\nVideo Games: Dev Game Club - Two video game industry veterans play and discuss games from the past and consider their impact on the games that came after them.\n\nSome others that I enjoy: Advent of Computing, Huberman Lab, American Hysteria, Revolutions, Patrick Boyle on Finance, and more.",
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
