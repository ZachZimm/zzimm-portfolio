import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Github from "/github.svg";

interface InterestProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  status: string;
  githubUrl: string;
}

export const Interest = ({
  title,
  description,
  imageUrl,
  technologies,
  status,
  githubUrl,
}: InterestProps) => {
  return (
    <div className="bg-linear-45 from-chart-2 via-chart-3 to-chart-4 p-5 rounded-lg">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 gap-2">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-row gap-2">
            <Github />
            <a className="text-muted-foreground" href={githubUrl}>
              View on Github - {status}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* TODO - Create a page for each project*/}
        </div>
      </div>
    </div>
  );
};
