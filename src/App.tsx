import "@/index.css";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen min-w-screen">
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
