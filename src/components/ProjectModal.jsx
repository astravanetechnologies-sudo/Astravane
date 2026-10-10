import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FramedImage } from "./Frame";

/* Full-screen project view: picture gallery on one side, the write-up on the other.
   Uses the native <dialog>, so Escape, focus handling and the backdrop come from the browser. */
export default function ProjectModal({ project, startIndex = 0, onClose }) {
  const dialog = useRef(null);
  const thumbs = useRef(null);
  const [index, setIndex] = useState(startIndex);
  const images = project.images;
  const many = images.length > 1;
  const image = images[index];

  useEffect(() => {
    const d = dialog.current;
    if (!d.open) d.showModal();
    const root = document.documentElement;
    const before = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = before; };
  }, []);

  /* Keep the current thumbnail in view (scrolls the strip only, never the page). */
  useEffect(() => {
    const strip = thumbs.current;
    const el = strip?.children[index];
    if (!el) return;
    strip.scrollTo({ left: el.offsetLeft - (strip.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [index]);

  const go = (step) => setIndex((i) => (i + step + images.length) % images.length);
  const onKeyDown = (e) => {
    if (!many) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <dialog
      ref={dialog}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
    >
      <div className="modal-card">
        <header className="modal-head">
          <div>
            <span className="eyebrow">{project.label}{project.status ? ` · ${project.status}` : ""}</span>
            <h2 id="modal-title">{project.title}</h2>
          </div>
          <button type="button" className="icon-btn" onClick={() => dialog.current.close()} aria-label="Close">
            <X size={20} />
          </button>
        </header>

        <div className="modal-body">
          <div className="modal-gallery">
            <div className={`modal-stage kind-${image.kind}`}>
              <FramedImage key={image.src} project={project} image={image} sizes="(max-width: 1024px) 94vw, 760px" eager />
              {many && (
                <>
                  <button type="button" className="stage-nav prev" onClick={() => go(-1)} aria-label="Previous image"><ChevronLeft size={20} /></button>
                  <button type="button" className="stage-nav next" onClick={() => go(1)} aria-label="Next image"><ChevronRight size={20} /></button>
                </>
              )}
            </div>
            <p className="modal-caption" aria-live="polite">
              <span>{image.caption}</span>
              {many && <span className="modal-counter">{index + 1} / {images.length}</span>}
            </p>
            {many && (
              <div className="modal-thumbs" ref={thumbs}>
                {images.map((im, n) => (
                  <button key={im.src} type="button" className={`${n === index ? "on" : ""} kind-${im.kind}`} onClick={() => setIndex(n)} aria-label={`Show image ${n + 1}: ${im.caption}`} aria-current={n === index ? "true" : undefined}>
                    <img src={im.sm} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal-info">
            <p className="modal-summary">{project.summary}</p>
            <h3>What we delivered</h3>
            <ul className="ticks">
              {project.points.map((p) => (
                <li key={p}><Check size={16} aria-hidden="true" />{p}</li>
              ))}
            </ul>
            <h3>Technology</h3>
            <ul className="tags">
              {project.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {project.url && (
              <a className="btn btn-primary modal-link" href={project.url} target="_blank" rel="noreferrer">
                Visit {project.address} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
