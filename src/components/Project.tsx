import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Github from "/github.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "./ui/card";

interface ProjectProps {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  status: string;
  githubUrl: string;
}

export const Project = ({
  title,
  description,
  longDescription,
  imageUrl,
  technologies,
  status,
  githubUrl,
}: ProjectProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
          <Card className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 gap-2 p-2">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="border-muted-foreground border-2 rounded-md p-2 mb-4">
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
              </div>
            </div>
          </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto px-6 py-4 space-y-4">
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-md" />
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                {tech}
              </span>
            ))}
            
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Long Description</h4>
            <p>{longDescription}</p>
          </div>
          <div className="flex items-center gap-2">
            <Github />
            <a href={githubUrl} className="text-primary font-medium">
              View on GitHub - {status}
            </a>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
