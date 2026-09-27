import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AIToolkit from "./components/AIToolkit";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative bg-void min-h-screen">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AIToolkit />
        <Projects />
        <TechStack />
        <Journey />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
