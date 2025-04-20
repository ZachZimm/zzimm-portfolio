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

// Example copy-pasted from neobrutalisim UI site
export default function DialogWithStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sticky Footer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
          <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
// End example


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
