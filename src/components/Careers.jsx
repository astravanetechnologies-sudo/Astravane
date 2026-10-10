import { ArrowUpRight, Briefcase, Check, Clock, MapPin } from "lucide-react";
import { vacancies } from "../data/careers";
import { company } from "../data/site";

const applyLink = (role) => `mailto:${company.email}?subject=${encodeURIComponent(`Application: ${role}`)}`;

export default function Careers() {
  return (
    <section className="section" id="careers">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">Careers</span>
            <h2 className="h2">Build What&rsquo;s Next With Us</h2>
          </div>
          <p className="lead">
            We are a small team that ships real products. If you like owning your work from first sketch
            to production, we would like to hear from you.
          </p>
        </div>

        <p className="careers-count reveal"><strong>{vacancies.length}</strong> open positions</p>

        <div className="careers-grid">
          {vacancies.map((job) => (
            <article className="job-card reveal" key={job.id} id={job.id}>
              <header className="job-head">
                <div>
                  <span className="job-team">{job.team}</span>
                  <h3>{job.title}</h3>
                </div>
                <span className="badge badge-live"><i aria-hidden="true" />Hiring</span>
              </header>
              <ul className="job-meta">
                <li><Briefcase size={15} aria-hidden="true" />{job.type}</li>
                <li><MapPin size={15} aria-hidden="true" />{job.location}</li>
                <li><Clock size={15} aria-hidden="true" />Open now</li>
              </ul>
              <p className="job-summary">{job.summary}</p>

              <div className="job-columns">
                <div>
                  <h4>What you&rsquo;ll do</h4>
                  <ul className="ticks">
                    {job.responsibilities.map((r) => <li key={r}><Check size={15} aria-hidden="true" />{r}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>What you bring</h4>
                  <ul className="ticks">
                    {job.requirements.map((r) => <li key={r}><Check size={15} aria-hidden="true" />{r}</li>)}
                  </ul>
                </div>
              </div>

              <footer className="job-foot">
                <ul className="tags" aria-label="Technology">
                  {job.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a className="btn btn-primary" href={applyLink(job.title)}>
                  Apply for this role <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </footer>
            </article>
          ))}
        </div>

        <p className="careers-note reveal">
          Don&rsquo;t see your role? Send your CV to <a href={`mailto:${company.email}`}>{company.email}</a> and tell us what you would like to build.
        </p>
      </div>
    </section>
  );
}
