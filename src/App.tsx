import "@/index.css";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";

function App() {
  return (
    <main className="min-h-screen min-w-screen">
      <Hero />
      <Projects />
      <Interests />
    </main>
  );
}

export default App;
