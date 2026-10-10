import { useEffect, useState } from "react";
import "./App.css";
import "./Dark.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Approach, Industries, Services } from "./components/About";
import Products from "./components/Products";
import Work from "./components/Work";
import Careers from "./components/Careers";
import Footer, { CallToAction } from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

const THEME_KEY = "astravane-theme";

function storedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark";
  } catch {
    return false;
  }
}

export default function App() {
  const [dark, setDark] = useState(storedTheme);
  const [viewing, setViewing] = useState(null);

  /* The theme class sits on <html> so the page background and the project dialog follow it too. */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* private browsing: the choice simply is not remembered */
    }
  }, [dark]);

  const openProject = (project, index = 0) => setViewing({ project, index });

  return (
    <div className="astravane">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Products onOpen={openProject} />
        <Work onOpen={openProject} />
        <Industries />
        <Approach />
        <Careers />
        <CallToAction />
      </main>
      <Footer />
      {viewing && (
        <ProjectModal
          key={`${viewing.project.slug}-${viewing.index}`}
          project={viewing.project}
          startIndex={viewing.index}
          onClose={() => setViewing(null)}
        />
      )}
    </div>
  );
}
