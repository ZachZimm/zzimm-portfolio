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
}: InterestProps) => {
  return (
    <div className="bg-linear-45 from-chart-2 via-chart-3 to-chart-4 p-5 rounded-lg">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 gap-2">
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
        <div className="p-6">
          <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {/* TODO - Create a page for each interest*/}
        </div>
      </div>
    </div>
  );
};
