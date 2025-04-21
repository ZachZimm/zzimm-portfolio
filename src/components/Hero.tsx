import { Github } from "lucide-react";
import "@/App.css";
import "@/index.css";
// import the image wallpaper_17_1080p_small.png from the public folder
import wallpaper_17_1080p_small from "/wallpaper_17_1080p_small.png";
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

  // Helper for smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-color-muted relative overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${wallpaper_17_1080p_small}`,
          backgroundSize: "cover",
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="z-10">
        <Card className="text-center p-6 backdrop-blur-sm bg-background/80">
          <h2 className="text-start text-2xl mx-4">Hi, I'm</h2>
          <h1 className="text-6xl font-bold mb-4 text-foreground">
            Zach Zimmermann
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Full Stack Developer & Software Engineer
            <p className="text-[0.95rem] text-muted-foreground">
              (this site is a work in progress, watch as the stock photos
              disappear!)
            </p>
          </p>

          <div className="flex flex-row gap-2 justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              <Button className="bg-accent-foreground">See my projects</Button>
            </a>
            <a
              href="#interests"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("interests");
              }}
            >
              <Button className="bg-accent-foreground">Other interests</Button>
            </a>
            <a href="https://github.com/ZachZimm">
              <Button><Github /> Github</Button>
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
