import { ArrowRight } from "lucide-react";
import { BrowserFrame, Picture } from "./Frame";
import { products } from "../data/projects";
import { clients, stats } from "../data/site";

export default function Hero() {
  const [first, second] = products;
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="pill"><i aria-hidden="true" />Custom software · AI · Cloud · ERP</span>
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
          </div>
          <div className="hero-visual" aria-hidden="true">
            <BrowserFrame label={first.title} className="hero-shot hero-shot-a">
              <Picture image={first.images[0]} eager alt="" sizes="(max-width: 1024px) 92vw, 660px" />
            </BrowserFrame>
            <BrowserFrame label={second.title} className="hero-shot hero-shot-b">
              <Picture image={second.images[0]} eager alt="" sizes="(max-width: 1024px) 60vw, 420px" />
            </BrowserFrame>
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
