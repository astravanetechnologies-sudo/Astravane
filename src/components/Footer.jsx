import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Nav";
import { showcase } from "../data/projects";
import { company, industries, services } from "../data/site";

const tel = company.phone.replace(/[^+\d]/g, "");

export function CallToAction() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let&rsquo;s connect and build something extraordinary together.</p>
          </div>
          <a href={`mailto:${company.email}`} className="btn btn-light">Get in Touch <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo size={32} />
            <p>Astravane is committed to delivering innovative, secure and scalable technology solutions that empower businesses to grow and succeed.</p>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {services.slice(0, 6).map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Platforms</h3>
            <ul>
              {showcase.slice(0, 6).map((p) => <li key={p.slug}><a href="#products">{p.title}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Industries</h3>
            <ul>
              {industries.slice(0, 6).map((i) => <li key={i.label}><a href="#industries">{i.label}</a></li>)}
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>
            <address>
              <span><MapPin size={16} aria-hidden="true" />{company.address}</span>
              <a href={`tel:${tel}`}><Phone size={16} aria-hidden="true" />{company.phone}</a>
              <a href={`mailto:${company.email}`}><Mail size={16} aria-hidden="true" />{company.email}</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. All Rights Reserved.</span>
          <span>{company.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
