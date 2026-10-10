import { useState } from "react";
import { ArrowRight, ArrowUpRight, Images } from "lucide-react";
import { BrowserFrame, Picture } from "./Frame";
import { categories, projects } from "../data/projects";

const FIRST_PAGE = 12;
const cardSizes = "(max-width: 680px) 92vw, (max-width: 1060px) 46vw, 400px";

function ProjectCard({ project, onOpen }) {
  const cover = project.images[0];
  const open = () => onOpen(project, 0);
  return (
    <article className="work-card reveal">
      <button type="button" className={`work-cover ${project.frame === "browser" ? "is-browser" : "is-plain"}`} onClick={open} aria-label={`View ${project.title}`}>
        {project.frame === "browser" ? (
          <BrowserFrame label={project.address ?? project.title}>
            <Picture image={cover} alt="" sizes={cardSizes} />
          </BrowserFrame>
        ) : (
          <Picture image={cover} alt="" sizes={cardSizes} />
        )}
        {project.images.length > 1 && (
          <span className="work-count" aria-hidden="true"><Images size={13} /> {project.images.length}</span>
        )}
      </button>
      <div className="work-body">
        <div className="work-top">
          <span className="work-label">{project.label}</span>
          {project.url && <span className="badge badge-live"><i aria-hidden="true" />Live</span>}
        </div>
        <h3 className="work-title">{project.title}</h3>
        <p className="work-summary">{project.summary}</p>
        <ul className="tags" aria-label="Technology">
          {project.tags.slice(0, 3).map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="work-actions">
          <button type="button" className="text-link" onClick={open}>
            View project <ArrowRight size={15} aria-hidden="true" />
          </button>
          {project.url && (
            <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
              Visit site <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* The chosen category lives in App, so other sections can jump here with a category already selected. */
export default function Work({ filter, onFilter, onOpen }) {
  const [expandedFor, setExpandedFor] = useState(null);
  const expanded = expandedFor === filter;
  const list = filter === "all" ? projects : projects.filter((p) => p.kind === filter);
  const visible = expanded ? list : list.slice(0, FIRST_PAGE);
  const count = (id) => (id === "all" ? projects.length : projects.filter((p) => p.kind === id).length);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2 className="h2">Products, Platforms and Websites We&rsquo;ve Delivered</h2>
          </div>
          <p className="lead">A selection of what our team has designed and built, from company websites and online stores to web and mobile applications.</p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button key={c.id} type="button" className={filter === c.id ? "on" : ""} aria-pressed={filter === c.id} onClick={() => onFilter(c.id)}>
              {c.label} <span>{count(c.id)}</span>
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((p) => <ProjectCard key={p.slug} project={p} onOpen={onOpen} />)}
        </div>

        {list.length > FIRST_PAGE && (
          <div className="section-cta">
            <button type="button" className="btn btn-outline" onClick={() => setExpandedFor(expanded ? null : filter)} aria-expanded={expanded}>
              {expanded ? "Show fewer projects" : `Show all ${list.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
