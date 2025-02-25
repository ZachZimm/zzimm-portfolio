import "@/App.css";
import "@/index.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // Adjust multiplier for effect intensity
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-color-muted relative overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/2/1920/1080")',
          backgroundSize: "cover",
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="z-10">
        <Card className="text-center p-4 backdrop-blur-sm bg-background/80">
          <h2 className="text-start text-2xl mx-4">Hi, I'm</h2>
          <h1 className="text-6xl font-bold mb-4 text-foreground">
            Zach Zimmermann
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <div className="flex flex-row gap-2 justify-center">
            <a href="#projects">
              <Button className="bg-accent-foreground">See my projects</Button>
            </a>
            <a href="#interests">
              <Button className="bg-accent-foreground">Other interests</Button>
            </a>
          </div>
        </Card>
      </div>
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
