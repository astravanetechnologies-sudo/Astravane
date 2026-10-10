import { useEffect, useState } from "react";
import "./App.css";
import "./Dark.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
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
  const [filter, setFilter] = useState("all");

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

  /* Used by the hero and the overview tiles: show one kind of work and go to the Work section. */
  const browse = (kind) => {
    setFilter(kind);
    document.getElementById("work")?.scrollIntoView();
  };

  return (
    <div className="astravane">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main id="main">
        <Hero onBrowse={browse} />
        <Overview onBrowse={browse} />
        <About />
        <Services />
        <Products onOpen={openProject} />
        <Work filter={filter} onFilter={setFilter} onOpen={openProject} />
        <Industries onOpen={openProject} />
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
