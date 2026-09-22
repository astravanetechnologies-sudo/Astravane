import { useState, useEffect, useRef } from "react";
import "./App.css";
import "./Dark.css";
import logo from "./assets/astravane-logo.png";
import logo1 from "./assets/a.png"
import { Sun, Moon, SunDim, SunDimIcon, SunIcon, SunMedium, MoonIcon } from "lucide-react";
 
/* ---------------- small inline icon set (no external deps) ---------------- */
const Icon = {
  code: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
    </svg>
  ),
  mobile: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  brain: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
      <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-6 0" />
    </svg>
  ),
  cloud: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M17.5 19H9a5 5 0 1 1 1.3-9.8A6 6 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19Z" />
    </svg>
  ),
  transform: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  layers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  ),
  bot: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M12 9V5M9 5h6" />
      <circle cx="9" cy="14.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  chart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  ),
  advisory: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  ),
  api: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="19" cy="18" r="2.5" />
      <path d="M7.2 11 17 6.8M7.2 13 17 17.2" />
    </svg>
  ),
  ai: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" />
    </svg>
  ),
  heart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 21s-7-4.4-9.5-8.8C.7 8.6 2.4 5 6 5c2 0 3.3 1 4 2 1.7 2.5 1 4-.3 5.6M12 21s7-4.4 9.5-8.8c1.8-3.6.1-7.2-3.5-7.2-2 0-3.3 1-4 2" />
    </svg>
  ),
  pie: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21.2 15a9 9 0 1 1-9.9-13.9" /><path d="M12 2v10l8 5" />
    </svg>
  ),
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  compass: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10" /><path d="m16 8-2 6-6 2 2-6 6-2Z" />
    </svg>
  ),
  hammer: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m15 12 4.5 4.5a2 2 0 0 1-3 3L12 15" /><path d="m3 21 6-6" /><path d="m10 5 4 4-3.5 3.5-4-4L10 5Z" />
    </svg>
  ),
  rocket: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8 1-2 1-2s-1.2.2-2 1c0-1 0-2.5-2-2Z" />
      <path d="M12 15c3-1 8-6 8-11 0 0-6.5-1-11 3.5C6 10.5 4.5 15 4.5 15l3.5 3.5S12 17 15 15Z" />
    </svg>
  ),
  refresh: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12a9 9 0 1 1-2.6-6.3M21 4v5h-5" />
    </svg>
  ),
  medical: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M12 8v8M8 12h8" /><rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  ),
  bank: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 10 12 4l9 6" /><path d="M4 10v9M9 10v9M15 10v9M20 10v9" /><path d="M2 21h20" />
    </svg>
  ),
  factory: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21V10l6 4v-4l6 4V7l6 4v10H3Z" />
    </svg>
  ),
  cart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
      <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" />
    </svg>
  ),
  building: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  gov: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </svg>
  ),
  cap: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  ),
  truck: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 8h11v9H2z" /><path d="M13 11h4l4 4v2h-8z" /><circle cx="6" cy="19" r="1.6" /><circle cx="17" cy="19" r="1.6" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.3 0-3-1.85-3s-2.13 1.4-2.13 2.9V21H9z" />
    </svg>
  ),
  twitter: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.9 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.2-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.5 1.4-1.2 1.9-2Z" />
    </svg>
  ),
  facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16.2 4.2 15.1 4 13.9 4c-2.5 0-4.2 1.5-4.2 4.3v2.2H7v3h2.7V21Z" />
    </svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.4c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

/* ---------------- logo mark ---------------- */
function LogoMark({ size = 34 }) {
  return (
    // <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    //   <defs>
    //     <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
    //       <stop offset="0%" stopColor="#2E5EE8" />
    //       <stop offset="55%" stopColor="#7B4DFF" />
    //       <stop offset="100%" stopColor="#FF9F43" />
    //     </linearGradient>
    //   </defs>
    //   <path d="M20 3 35 34H5L20 3Z" fill="url(#logoGrad)" />
    //   <circle cx="20" cy="24" r="5.5" fill="#fff" fillOpacity="0.95" />
    //   <path d="M20 21v3.6M18.2 22.5h3.6" stroke="#2E5EE8" strokeWidth="1.6" strokeLinecap="round" />
    // </svg>
    <img src={logo} alt="logo" width={size} height={size} />
  );
}

/* ---------------- hero art ---------------- */
function HeroArt() {
  return (
    <svg viewBox="0 0 460 420" width="100%" role="img" aria-label="Astravane logo mark">
      <defs>
        <linearGradient id="heroGrad" x1="60" y1="20" x2="400" y2="380">
          <stop offset="0%" stopColor="#2E5EE8" />
          <stop offset="55%" stopColor="#7B4DFF" />
          <stop offset="100%" stopColor="#FF9F43" />
        </linearGradient>
      </defs>
      <path d="M230 30 400 360H60L230 30Z" fill="none" stroke="url(#heroGrad)" strokeWidth="10" strokeLinejoin="round" />
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx={120 + i * 45} cy={90 + (i % 3) * 60} r="2.4" fill="#7B4DFF" opacity="0.55" />
      ))}
      <path d="M150 220h60v-40h50" stroke="#2E5EE8" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M280 260h-40v50h-60" stroke="#FF9F43" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="230" cy="230" r="34" fill="#0B1224" />
      <path d="M230 214a11 11 0 0 0-11 11v6h22v-6a11 11 0 0 0-11-11Zm-7 11a7 7 0 0 1 14 0v6h-14Z" fill="#fff" />
      <rect x="216" y="231" width="28" height="20" rx="3" fill="#fff" />
      <circle cx="230" cy="241" r="2.6" fill="#0B1224" />
      <path d="M400 30l6 14 14 6-14 6-6 14-6-14-14-6 14-6 6-14Z" fill="#FF9F43" />
    </svg>
  );
}

/* ---------------- data ---------------- */
const services = [
  { icon: "code", title: "Custom Software Development", desc: "Scalable, secure and high-performing software built for your unique needs." },
  { icon: "mobile", title: "Web & Mobile Development", desc: "Engaging and mobile applications that deliver seamless user experiences." },
  { icon: "brain", title: "AI & Machine Learning", desc: "Intelligent solutions that learn, adapt and help you make smarter decisions." },
  { icon: "cloud", title: "Cloud & DevOps", desc: "Scalable cloud solutions and DevOps practices that accelerate your growth." },
  { icon: "transform", title: "Digital Transformation", desc: "Modernize your processes and create a future-ready organization." },
  { icon: "layers", title: "ERP & Enterprise Solutions", desc: "Integrated software solutions to streamline operations and growth." },
  { icon: "bot", title: "Automation & RPA", desc: "Automate repetitive tasks and workflows to improve productivity and accuracy." },
  { icon: "chart", title: "Data Analytics & BI", desc: "Turn your data into actionable insights with powerful analytics and dashboards." },
  { icon: "shield", title: "Cybersecurity", desc: "Secure your digital assets with robust security solutions and compliance." },
  { icon: "advisory", title: "IT Consulting & Advisory", desc: "Expert guidance to help you achieve the right technology strategy." },
  { icon: "check", title: "QA & Testing", desc: "Ensure quality, performance and reliability with rigorous testing." },
  { icon: "api", title: "System Integration & APIs", desc: "Seamless integration of systems and APIs for connected experiences." },
];

const products = [
  { icon: "ai", title: "Astravane AI", desc: "AI-powered analytics and decision-support solutions.", color: "linear-gradient(135deg,#2E5EE8,#7B4DFF)" },
  { icon: "box", title: "Astravane ERP", desc: "A modern, modular ERP platform to manage your entire business easily.", color: "linear-gradient(135deg,#7B4DFF,#B44DFF)" },
  { icon: "heart", title: "Astravane Health", desc: "Digital solutions for healthcare providers, billing and management.", color: "linear-gradient(135deg,#FF5C7A,#FF9F43)" },
  { icon: "pie", title: "Astravane BI", desc: "Transform your data into actionable insights through smart dashboards.", color: "linear-gradient(135deg,#2E5EE8,#31C6C6)" },
];

const industries = [
  { icon: "medical", label: "Healthcare" },
  { icon: "bank", label: "Banking & Finance" },
  { icon: "factory", label: "Manufacturing" },
  { icon: "cart", label: "Retail & E-commerce" },
  { icon: "building", label: "Real Estate" },
  { icon: "gov", label: "Government" },
  { icon: "cap", label: "Education" },
  { icon: "truck", label: "Logistics" },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "20+", label: "Industries Served" },
  { num: "99%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support Available" },
];

const approach = [
  { icon: "search", title: "Discover", desc: "We understand your business, challenges and opportunities." },
  { icon: "compass", title: "Design", desc: "We shape solutions and user experiences that fit your goals." },
  { icon: "hammer", title: "Develop", desc: "We build scalable and high-performing solutions." },
  { icon: "rocket", title: "Deploy", desc: "We deploy with confidence, ensuring a smooth transition to production." },
  { icon: "refresh", title: "Evolve", desc: "We continuously improve and support as your business grows." },
];

const navItems = [ "About Us", "Services", "Products", "Industries", "Our Approach", "Careers", "Contact Us"];
const navids = [ "about-us", "services", "products", "industries", "approach", "careers", "contact-us"];

/* ---------------- component ---------------- */
export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`astravane ${dark ? "dark" : ""}`}>
      {/* NAV */}
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="nav-logo">
            <LogoMark />
            {/*<span className="word">ASTRAVANE</span>*/}
          </a>
          <nav className={`nav-links ${navOpen ? "open" : ""}`}>
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${navids[i]}`}
                className={i === 0 ? "" : ""}
                onClick={() => setNavOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
            {dark ? <SunMedium size={20} onClick={() => setDark((d) => !d)}  /> : <Moon size={20} onClick={() => setDark((d) => !d)} />}
          <a href="#contact-us" className="btn btn-primary btn-sm nav-cta">Get in Touch</a>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setNavOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div>
            <h1 className="hero-title">
              Build Smarter.<br />
              <span className="line2">Innovate Faster.</span><br />
              <span className="line3">Grow Beyond.</span>
            </h1>
            <p className="hero-copy">
              Astravane helps organizations turn complex business challenges into powerful digital
              experiences, intelligent systems, and scalable technology solutions.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore Our Services <Icon.arrow width={16} height={16} /></a>
              <a href="#contact-us" className="btn btn-outline">Talk to Us</a>
            </div>
          </div>
          <div className="hero-art">
            <img src={logo1} alt="logo1" />
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="logostrip">
        <div className="container">
          <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>Trusted by organizations worldwide</span>
          <div className="logostrip-row">
            {["TechNova", "Innovatek", "CloudWex", "Datamint", "Vertexon"].map((n) => (
              <div className="logostrip-item" key={n}><span className="dot" />{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about-us">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About Astravane</span>
            <h2 className="about-heading">Engineering the Future of Digital Business</h2>
            <p className="about-copy">
              Astravane is a next-generation IT company delivering innovative software solutions,
              enterprise systems, cloud services, AI-powered applications, and digital transformation
              strategies that help businesses grow, automate, and lead in a digital world.
            </p>
            <a href="#services" className="btn btn-primary">Learn More About Us <Icon.arrow width={16} height={16} /></a>
          </div>
          <div className="card-grid-3">
            <div className="info-card">
              <div className="icon" style={{ background: "rgba(46,94,232,0.1)", color: "#2E5EE8" }}><Icon.compass width={20} height={20} /></div>
              <h4>Our Vision</h4>
              <p>To become a globally trusted technology company that empowers organizations through intelligent software, innovative products, and transformative digital solutions.</p>
            </div>
            <div className="info-card">
              <div className="icon" style={{ background: "rgba(123,77,255,0.1)", color: "#7B4DFF" }}><Icon.rocket width={20} height={20} /></div>
              <h4>Our Mission</h4>
              <p>To combine technology, creativity, and business intelligence to build reliable, scalable, secure, and intelligent solutions that solve real-world problems.</p>
            </div>
            <div className="info-card">
              <div className="icon" style={{ background: "rgba(255,159,67,0.14)", color: "#FF9F43" }}><Icon.pie width={20} height={20} /></div>
              <h4>Our Values</h4>
              <ul>
                <li>Client Success</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>End-to-End IT Solutions</h2>
          </div>
          <div className="services-grid">
            {services.map((s) => {
              const IconCmp = Icon[s.icon];
              return (
                <div className="service-card" key={s.title}>
                  <div className="icon" style={{ color: "#2E5EE8" }}><IconCmp width={21} height={21} /></div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="section-cta">
            <a href="#services" className="btn btn-outline">View All Services</a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-bg" id="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Products</span>
            <h2>Purpose-Built Platforms</h2>
          </div>
          <div className="products-grid">
            {products.map((p) => {
              const IconCmp = Icon[p.icon];
              return (
                <div className="product-card" key={p.title}>
                  <div className="icon" style={{ background: p.color, color: "#fff" }}><IconCmp width={24} height={24} /></div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <span className="badge-soon">Coming Soon</span>
                </div>
              );
            })}
          </div>
          <div className="section-cta">
            <a href="#products" className="btn btn-outline">View All Products</a>
          </div>
        </div>
      </section>

      {/* INDUSTRIES + STATS */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Industries We Serve</span>
          </div>
          <div className="industries-row">
            {industries.map((ind) => {
              const IconCmp = Icon[ind.icon];
              return (
                <div className="industry-item" key={ind.label}>
                  <div className="icon" style={{ color: "#2E5EE8" }}><IconCmp width={22} height={22} /></div>
                  {ind.label}
                </div>
              );
            })}
          </div>
          <div className="stats-row">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" id="our-approach" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Approach</span>
            <h2>From Idea to Impact</h2>
          </div>
          <div className="approach-grid">
            {approach.map((a, i) => {
              const IconCmp = Icon[a.icon];
              return (
                <div className="approach-card" key={a.title}>
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h3>Ready to Transform Your Business?</h3>
              <p>Let's connect and build something extraordinary together.</p>
            </div>
            <a href="#contact-us" className="btn btn-primary">Get in Touch <Icon.arrow width={16} height={16} /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact-us">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo"><LogoMark size={30} /> ASTRAVANE</div>
              <p>Astravane is committed to delivering innovative, secure and scalable technology solutions that empower businesses to grow and succeed.</p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn"><Icon.linkedin width={16} height={16} /></a>
                <a href="#" aria-label="Twitter"><Icon.twitter width={16} height={16} /></a>
                <a href="#" aria-label="Facebook"><Icon.facebook width={16} height={16} /></a>
                <a href="#" aria-label="Instagram"><Icon.instagram width={16} height={16} /></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#about-us">Our Vision & Mission</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#">News & Insights</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">All Services</a></li>
                <li><a href="#services">IT Consulting</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">AI & Automation</a></li>
                <li><a href="#services">Cybersecurity</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Astravane AI</a></li>
                <li><a href="#products">Astravane ERP</a></li>
                <li><a href="#products">Astravane Health</a></li>
                <li><a href="#products">Astravane BI</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Industries</h5>
              <ul>
                <li><a href="#industries">Healthcare</a></li>
                <li><a href="#industries">Banking & Finance</a></li>
                <li><a href="#industries">Manufacturing</a></li>
                <li><a href="#industries">Retail & E-commerce</a></li>
                <li><a href="#industries">Real Estate</a></li>
                <li><a href="#industries">Government</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact Us</h5>
              <div className="contact-line"><Icon.pin width={16} height={16} /> 123 Tech Avenue, Lahore, Punjab, Pakistan</div>
              <div className="contact-line"><Icon.phone width={16} height={16} /> +92 333 4245089</div>
              <div className="contact-line"><Icon.mail width={16} height={16} /> info@astravane.com</div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Astravane. All Rights Reserved.</span>
            <div className="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
