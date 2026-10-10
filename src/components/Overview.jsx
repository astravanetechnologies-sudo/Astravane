import { ArrowRight } from "lucide-react";
import { fallbackCover, projects } from "../data/projects";

/* "What we build": one tile per kind of work, each showing a stack of real covers. */
const tiles = [
  { id: "platform", title: "Platforms & ERPs", text: "Hospital systems, retail and workshop ERPs, production planning: the software a business runs on every day." },
  { id: "webapp", title: "Web applications", text: "Marketplaces, booking tools, online libraries and AI-assisted apps built for the browser." },
  { id: "site", title: "Websites & online stores", text: "Company sites and e-commerce stores for builders, clinics, consultancies and retail brands." },
  { id: "mobile", title: "Mobile apps", text: "iOS and Android apps for shopping, fitness, food, travel and vehicle tracking." },
].map((t) => ({ ...t, items: projects.filter((p) => p.kind === t.id) }));

export default function Overview({ onBrowse }) {
  return (
    <section className="section overview" id="what-we-build">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">What We Build</span>
            <h2 className="h2">One Team for Every Kind of Software</h2>
          </div>
          <p className="lead">From the ERP behind the counter to the app in a customer&rsquo;s pocket, the same team designs, builds and supports it.</p>
        </div>

        <div className="overview-grid">
          {tiles.map((t) => (
            <article className="overview-tile reveal" key={t.id}>
              <button type="button" className="overview-stack" onClick={() => onBrowse(t.id)} aria-label={`Browse ${t.title}`}>
                {t.items.slice(0, 4).map((p) => (
                  <img key={p.slug} src={p.thumb} alt="" width="520" height="325" loading="lazy" decoding="async" onError={(e) => fallbackCover(e, p)} />
                ))}
              </button>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <p className="overview-names">{t.items.slice(0, 4).map((p) => p.title).join(" · ")}{t.items.length > 4 ? ` · +${t.items.length - 4} more` : ""}</p>
              <button type="button" className="text-link" onClick={() => onBrowse(t.id)}>
                Browse all <ArrowRight size={15} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
