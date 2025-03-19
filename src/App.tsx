import { LanguageProvider } from "./contexts/language-context";
import { StatusBanner } from "./components/status-banner";
import { HeroSection } from "./components/hero-section";
import { SkillsMatrix } from "./components/skills-matrix";
import { ProjectsGrid } from "./components/projects-grid";
import { ContactSection } from "./components/contact-section";

import "./global.css";
function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen flex flex-col">
        <StatusBanner />
        <HeroSection />
        <SkillsMatrix />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </LanguageProvider>
  );
}

export default App;
