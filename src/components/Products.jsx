import { useState } from "react";
import { ArrowRight, Check, Maximize2 } from "lucide-react";
import Icon from "./icons";
import { BrowserFrame, Picture } from "./Frame";
import { products } from "../data/projects";
import { roadmap } from "../data/site";

/* The part of a caption before the colon names the screen, e.g. "Live board". */
const screenName = (caption) => caption.split(":")[0];

function ProductFeature({ product, flip, onOpen }) {
  const [current, setCurrent] = useState(0);
  const screens = product.images.slice(0, 6);
  const image = screens[current];

  return (
    <article className={`product reveal${flip ? " flip" : ""}`}>
      <div className="product-copy">
        <div className="product-badges">
          <span className="badge badge-status"><i aria-hidden="true" />{product.status}</span>
          <span className="product-label">{product.label}</span>
        </div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-summary">{product.summary}</p>
        <ul className="feature-list">
          {product.features.map((f) => (
            <li key={f}><Check size={15} aria-hidden="true" />{f}</li>
          ))}
        </ul>
        <ul className="tags tags-on-dark" aria-label="Technology">
          {product.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <button type="button" className="btn btn-light" onClick={() => onOpen(product, current)}>
          View all {product.images.length} screens <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="product-visual">
        <button type="button" className="product-shot" onClick={() => onOpen(product, current)} aria-label={`Open the ${product.title} gallery at ${screenName(image.caption)}`}>
          <BrowserFrame label={product.title}>
            <Picture key={image.src} image={image} sizes="(max-width: 1024px) 92vw, 700px" />
          </BrowserFrame>
          <span className="product-zoom" aria-hidden="true"><Maximize2 size={15} /> Enlarge</span>
        </button>
        <div className="shot-tabs" role="group" aria-label={`${product.title} screens`}>
          {screens.map((img, n) => (
            <button key={img.src} type="button" className={n === current ? "on" : ""} aria-pressed={n === current} onClick={() => setCurrent(n)}>
              {screenName(img.caption)}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Products({ onOpen }) {
  return (
    <section className="section products" id="products">
      <div className="products-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head on-dark reveal">
          <span className="eyebrow">Our Products</span>
          <h2 className="h2">Purpose-Built Platforms</h2>
          <p className="lead">Software we design, build and run ourselves, shaped by the industries we work with every day.</p>
        </div>

        {products.map((p, i) => (
          <ProductFeature key={p.slug} product={p} flip={i % 2 === 1} onOpen={onOpen} />
        ))}

        <div className="roadmap reveal">
          <h3 className="roadmap-title">On the roadmap</h3>
          <div className="roadmap-grid">
            {roadmap.map((r) => (
              <article className="roadmap-card" key={r.title}>
                <div className="icon" style={{ background: r.color }}><Icon name={r.icon} size={22} /></div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
                <span className="badge-soon">Coming Soon</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
