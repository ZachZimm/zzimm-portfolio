import "@/App.css";
import "@/index.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// function for the button - goes to the projects section

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-color-muted">
      <Card className="text-center p-4 ">
        <h1 className="text-6xl font-bold mb-4 text-foreground">
          Zach Zimmermann
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Full Stack Developer & Software Engineer
        </p>
        <a href="#projects">
          <Button className="bg-accent-foreground">See my projects</Button>
        </a>
        <a href="#interests">
          <Button className="bg-accent-foreground">Other Interests</Button>
        </a>
      </Card>
      <div className="flex justify-center mt-8">
        <a href="#projects" className="scroll-smooth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-foreground animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
