import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Maximize2 } from "lucide-react";
import Icon from "./icons";
import { BrowserFrame, Picture } from "./Frame";
import { bySlug, showcase } from "../data/projects";
import { suites } from "../data/site";

const ROTATE_MS = 7000;

/* The part of a caption before the colon names the screen, e.g. "Live board". */
const screenName = (caption) => caption.split(":")[0];

/* Real screenshots first; a system that only has an overview picture shows that instead. */
function screensOf(project) {
  const screens = project.images.filter((i) => i.kind === "screen");
  return (screens.length ? screens : project.images).slice(0, 5);
}

export default function Products({ onOpen }) {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState(0);
  const [paused, setPaused] = useState(false);
  const rail = useRef(null);
  const project = showcase[active];
  const screens = screensOf(project);
  const image = screens[screen] ?? screens[0];

  /* Move on to the next system every few seconds, unless the visitor is looking at this one. */
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => {
      setActive((a) => (a + 1) % showcase.length);
      setScreen(0);
    }, ROTATE_MS);
    return () => clearTimeout(timer);
  }, [paused, active]);

  /* On narrow screens the tabs scroll sideways: keep the current one in view. */
  useEffect(() => {
    const el = rail.current?.children[active];
    if (el) rail.current.scrollTo({ left: el.offsetLeft - (rail.current.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  const choose = (i) => {
    setActive(i);
    setScreen(0);
  };
  const open = () => onOpen(project, project.images.indexOf(image));
  const hold = { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), onFocus: () => setPaused(true), onBlur: () => setPaused(false) };

  return (
    <section className="section products" id="products">
      <div className="products-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head on-dark reveal">
          <span className="eyebrow">Platforms &amp; Systems</span>
          <h2 className="h2">Purpose-Built Platforms</h2>
          <p className="lead">ERPs, hospital systems, marketplaces and business tools that our team has designed, built and supports.</p>
        </div>

        <div className={`showcase reveal${paused ? " is-paused" : ""}`} {...hold}>
          <div className="showcase-tabs" role="group" aria-label="Platforms" ref={rail}>
            {showcase.map((p, i) => (
              <button key={p.slug} type="button" className={i === active ? "on" : ""} aria-pressed={i === active} onClick={() => choose(i)}>
                <small>{p.industry}</small>
                <span>{p.title}</span>
                {i === active && <i key={`${p.slug}-${active}`} className="showcase-progress" style={{ animationDuration: `${ROTATE_MS}ms` }} aria-hidden="true" />}
              </button>
            ))}
          </div>

          <div className="showcase-stage">
            <div className="showcase-visual">
              <button type="button" className="product-shot" onClick={open} aria-label={`Open the ${project.title} gallery at ${screenName(image.caption)}`}>
                <BrowserFrame label={project.title}>
                  <Picture key={image.src} image={image} sizes="(max-width: 1060px) 92vw, 720px" />
                </BrowserFrame>
                <span className="product-zoom" aria-hidden="true"><Maximize2 size={15} /> Enlarge</span>
              </button>
              {screens.length > 1 && (
                <div className="shot-tabs" role="group" aria-label={`${project.title} screens`}>
                  {screens.map((img, n) => (
                    <button key={img.src} type="button" className={n === screen ? "on" : ""} aria-pressed={n === screen} onClick={() => setScreen(n)}>
                      {screenName(img.caption)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="showcase-copy" key={project.slug}>
              <span className="product-label">{project.label}</span>
              <h3 className="product-title">{project.title}</h3>
              <p className="product-summary">{project.summary}</p>
              {project.features && (
                <ul className="feature-list">
                  {project.features.map((f) => (
                    <li key={f}><Check size={15} aria-hidden="true" />{f}</li>
                  ))}
                </ul>
              )}
              <ul className="tags tags-on-dark" aria-label="Technology">
                {project.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <button type="button" className="btn btn-light" onClick={open}>
                {project.images.length > 1 ? `View all ${project.images.length} screens` : "View project"} <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="suites reveal">
          <h3 className="suites-title">Solution suites</h3>
          <div className="suites-grid">
            {suites.map((s) => (
              <article className="suite-card" key={s.title}>
                <div className="icon" style={{ background: s.color }}><Icon name={s.icon} size={22} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="suite-work">
                  <span>From our portfolio</span>
                  {s.projects.map((slug) => (
                    <button key={slug} type="button" onClick={() => onOpen(bySlug[slug], 0)}>{bySlug[slug].title}</button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
