import { ArrowRight } from "lucide-react";
import { categories, fallbackCover, projects } from "../data/projects";
import { clients, stats } from "../data/site";

/* Four moving columns that between them carry every project in the portfolio. */
const columns = [0, 1, 2, 3].map((c) => projects.filter((_, i) => i % 4 === c));
const kinds = categories.filter((c) => c.id !== "all");

function WallCard({ project }) {
  return (
    <li className="wall-card">
      <img src={project.thumb} alt="" width="520" height="325" loading="lazy" decoding="async" onError={(e) => fallbackCover(e, project)} />
      <span className="wall-cap">
        <b>{project.title}</b>
        <i>{project.label}</i>
      </span>
    </li>
  );
}

export default function Hero({ onBrowse }) {
  const [delivered, clientCount] = stats;
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-top">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="pill"><i aria-hidden="true" />{delivered.num} projects delivered for {clientCount.num} clients</span>
              <h1 className="hero-title">
                Build Smarter.<br />
                <span className="line2">Innovate Faster.</span><br />
                <span className="line3">Grow Beyond.</span>
              </h1>
              <p className="hero-lead">
                Astravane helps organizations turn complex business challenges into powerful digital
                experiences, intelligent systems, and scalable technology solutions.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">See Our Work <ArrowRight size={17} aria-hidden="true" /></a>
                <a href="#contact-us" className="btn btn-outline">Talk to Us</a>
              </div>
              <div className="hero-kinds">
                <span>We build</span>
                {kinds.map((k) => (
                  <button type="button" key={k.id} onClick={() => onBrowse(k.id)}>{k.label}</button>
                ))}
              </div>
            </div>
          </div>

          {/* decorative: the same projects are listed, with text, in the Work section */}
          <div className="wall" aria-hidden="true">
            <div className="wall-cols">
              {columns.map((col, c) => (
                <ul className="wall-col" key={c}>
                  {[...col, ...col].map((p, i) => <WallCard key={`${p.slug}-${i}`} project={p} />)}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <dl className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="clients" aria-label="Clients">
        <p className="clients-title">Brands we&rsquo;ve built for</p>
        <div className="marquee">
          <ul className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <li key={i} aria-hidden={i >= clients.length ? "true" : undefined}>{name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
