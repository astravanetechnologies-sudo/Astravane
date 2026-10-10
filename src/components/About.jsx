import { ArrowRight, Compass, Gem, Rocket } from "lucide-react";
import Icon from "./icons";
import { projects } from "../data/projects";
import { alsoServing, approach, industries, services, technologies, values } from "../data/site";

export function About() {
  return (
    <section className="section" id="about-us">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow">About Astravane</span>
          <h2 className="h2">Engineering the Future of Digital Business</h2>
          <p className="lead">
            Astravane is a next-generation IT company delivering innovative software solutions,
            enterprise systems, cloud services, AI-powered applications, and digital transformation
            strategies that help businesses grow, automate, and lead in a digital world.
          </p>
          <a href="#services" className="btn btn-primary">Explore Our Services <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="about-cards">
          <article className="info-card reveal">
            <div className="icon tone-blue"><Compass size={20} aria-hidden="true" /></div>
            <h3>Our Vision</h3>
            <p>To become a globally trusted technology company that empowers organizations through intelligent software, innovative products, and transformative digital solutions.</p>
          </article>
          <article className="info-card reveal">
            <div className="icon tone-purple"><Rocket size={20} aria-hidden="true" /></div>
            <h3>Our Mission</h3>
            <p>To combine technology, creativity, and business intelligence to build reliable, scalable, secure, and intelligent solutions that solve real-world problems.</p>
          </article>
          <article className="info-card info-card-wide reveal">
            <div className="icon tone-orange"><Gem size={20} aria-hidden="true" /></div>
            <h3>Our Values</h3>
            <ul className="value-list">
              {values.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section section-tint" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Services</span>
          <h2 className="h2">End-to-End IT Solutions</h2>
          <p className="lead">From a first prototype to enterprise platforms, one team covers strategy, design, engineering and support.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card reveal" key={s.title}>
              <div className="icon"><Icon name={s.icon} size={21} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="tech reveal">
          <h3>Technologies we deliver with</h3>
          <ul>
            {technologies.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Every industry card is backed by the projects delivered in it. */
const sectors = industries.map((ind) => ({ ...ind, items: projects.filter((p) => p.industry === ind.label) }));

export function Industries({ onOpen }) {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="h2">Built for the Way Your Sector Works</h2>
          <p className="lead">Every sector below is backed by systems, sites or apps we have delivered. Open any of them to see the work.</p>
        </div>
        <ul className="industries-grid">
          {sectors.map((ind) => (
            <li className="industry reveal" key={ind.label}>
              <div className="industry-head">
                <span className="icon"><Icon name={ind.icon} size={22} /></span>
                <h3>{ind.label}</h3>
              </div>
              <div className="industry-work">
                {ind.items.map((p) => (
                  <button key={p.slug} type="button" onClick={() => onOpen(p, 0)}>{p.title}</button>
                ))}
              </div>
            </li>
          ))}
          <li className="industry industry-also reveal">
            <h3>Also serving</h3>
            <ul>
              {alsoServing.map((s) => (
                <li key={s.label}><Icon name={s.icon} size={18} />{s.label}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="section section-tint" id="approach">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Approach</span>
          <h2 className="h2">From Idea to Impact</h2>
        </div>
        <ol className="approach-grid">
          {approach.map((a, i) => (
            <li className="approach-card reveal" key={a.title}>
              <div className="approach-top">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={a.icon} size={20} className="approach-icon" />
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
