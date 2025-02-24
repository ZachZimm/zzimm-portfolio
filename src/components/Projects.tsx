import { Project } from "./Project";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    imageUrl: "https://picsum.photos/seed/1/800/600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered language translation and sentiment analysis.",
    imageUrl: "https://picsum.photos/seed/2/800/600",
    technologies: ["TypeScript", "WebSocket", "TensorFlow", "Redis"],
  },
  {
    title: "Smart Home Dashboard",
    description:
      "IoT dashboard for monitoring and controlling smart home devices with analytics.",
    imageUrl: "https://picsum.photos/seed/3/800/600",
    technologies: ["React", "GraphQL", "Python", "MQTT"],
  },
  {
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness tracking application with social features and workout planning.",
    imageUrl: "https://picsum.photos/seed/4/800/600",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div className="bg-linear-45 from-green-500 via-yellow-500 to-teal-500 p-4 rounded-lg">
              <Project key={index} {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
