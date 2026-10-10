import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import mark from "../assets/astravane-mark.webp";
import { company, navItems } from "../data/site";

export function Logo({ size = 34 }) {
  return (
    <span className="logo">
      <span className="logo-mark"><img src={mark} alt="" width={Math.round(size * 1.09)} height={size} /></span>
      <span className="logo-word">{company.name.toUpperCase()}</span>
    </span>
  );
}

export default function Nav({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 10);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the link of the section currently in the middle of the screen. */
  useEffect(() => {
    const ids = ["home", ...navItems.map((n) => n.id), "contact-us"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" aria-label={`${company.legalName} home`} onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav id="site-menu" className="nav-links" aria-label="Main">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "true" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact-us" className="nav-links-cta" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact-us" className="btn btn-primary btn-sm nav-cta">Get in Touch</a>
          <button type="button" className="icon-btn nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
