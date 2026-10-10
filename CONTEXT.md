# Astravane Technologies website: project context

A briefing for anyone (person or AI assistant) picking this project up. It explains what the site is,
how it is put together, where its content came from and what is still open. Day-to-day editing
instructions are in `README.md`.

_Last updated: 10 October 2026._

## 1. What this is

The public company website for Astravane Technologies: a single page that presents the company, its
services, the platforms it has built, a portfolio of delivered work and open vacancies.

Before October 2026 the site had the company copy but no portfolio. It was then redesigned and filled
with:

- Platforms and business systems: **MechaManPro** (workshop management for garages), the
  **Hospital Management System** (HMIS / EMR), the **Bin Sultan Fabrics ERP** and others.
- Client websites, online stores, web apps and mobile apps carried over from the LabridTech portfolio
  site (`github.com/LabridTech/portfolio-web`).
- A Careers section with two vacancies, hardcoded as a concept.

### The guiding rule for layout

**The site must show the scale and breadth of the work.** The first version led with two in-house
products and read like a small company with two products; that was rejected. So:

- The hero carries a moving wall of every project in the portfolio.
- No section presents two products as the whole offer. The Platforms section rotates through seven
  systems; in-house products and client systems sit side by side.
- Sections are backed by real work wherever possible: each industry and each solution suite lists the
  projects behind it.
- Only real projects and real figures are used to do this. Nothing is invented.

## 2. Stack and commands

React 19 + Vite, plain CSS, `lucide-react` for icons. No router, no CSS framework, no backend.

```
npm install
npm run dev       # local preview
npm run build     # production build into dist/
npm run lint
```

The React Compiler is enabled in `vite.config.js`, so components are written in the plain idiomatic
style it expects (no mutation of props or state).

## 3. Structure

```
index.html              title, meta tags, fonts, saved-theme script
public/
  favicon.png, apple-touch-icon.png
  work/<project>/       portfolio pictures: <name>.webp, <name>-sm.webp, and <cover>-xs.webp for the cover
src/
  App.jsx               page composition, theme state, chosen work category, which project is open
  App.css               all styles for the light theme; the colour palette is at the top
  Dark.css              dark theme: variable overrides plus a few adjustments
  assets/               logo files (astravane-mark.webp is the one the page uses)
  components/
    Nav.jsx             header, mobile menu, theme switch, active-section highlight
    Hero.jsx            headline, the moving wall of project covers, stats row, scrolling client names
    Overview.jsx        "What we build": one tile per kind of work, each with a stack of covers
    About.jsx           About, Services (with the technology list), Industries and Approach sections
    Products.jsx        Platforms section: a rotating showcase of seven systems, plus the solution suites
    Work.jsx            portfolio grid with category filters and "show all"
    ProjectModal.jsx    project viewer: picture gallery and write-up (native <dialog>)
    Careers.jsx         vacancies
    Footer.jsx          call-to-action banner and footer
    Frame.jsx           browser, phone and plain picture frames
    icons.jsx           maps icon names used in the data files to lucide icons
  data/
    site.js             company details, navigation, services, technologies, suites, industries, stats
    projects.js         every portfolio entry, the showcase order, and helpers
    careers.js          vacancies
    image-sizes.json    pixel size of every portfolio picture
```

## 4. Design rules

- **The colour palette is fixed.** The values at the top of `src/App.css` (navy `#0B1224`, blue
  `#2E5EE8`, purple `#7B4DFF`, orange `#FF9F43`, and the neutrals) and their dark counterparts in
  `src/Dark.css` are the brand palette from the original site. The layout may change; these may not.
- Fonts: Plus Jakarta Sans for headings, Inter for text (loaded in `index.html`).
- Light theme by default. The visitor's choice of theme is remembered in `localStorage`
  (`astravane-theme`) and applied to `<html class="dark">`.
- The Platforms section is a dark band in both themes.
- The logo mark is dark blue, so on dark surfaces it sits on a white rounded tile.
- Motion is CSS only: the hero wall and the client names scroll continuously, sections fade in on
  scroll (`animation-timeline: view()`), and the Platforms showcase moves to the next system every
  seven seconds unless the pointer or keyboard focus is on it. All of it stops for visitors who ask
  for reduced motion, and nothing is hidden when a browser lacks support.

## 5. Content model

Everything a non-developer is likely to change is in `src/data/`.

A project in `projects.js` has:

- `slug`, `title`, `summary`, `points`, `tags`, `images`
- `kind`: `platform`, `webapp`, `site` or `mobile`. It drives the Work filters, the hero shortcuts and
  the "What we build" tiles.
- `label`: the short line on its card ("Retail ERP", "Company website").
- `industry`: must match a label in `industries` in `site.js`; it places the project in the
  Industries section.
- `frame`: `browser` (screenshot in a browser window) or `plain` (composed cover).
- optional `features` (short list shown in the Platforms showcase), `url` and `address`.

The first image is the cover. Each image has a caption and a kind: `screen` (wide screenshot), `cover`
(composed overview) or `phone` (portrait app screen). For the systems in the showcase, the text before
the colon in a caption ("Live board: ...") becomes the label of its screen tab.

Other rules:

- A project with a `url` shows a "Live" badge and a "Visit site" link. Only add one for a site that
  opens normally. Client sites that no longer open are listed without a link; the old address is kept
  in a comment beside the entry.
- `showcase` in `projects.js` is the ordered list of systems in the Platforms section.
- `suites` in `site.js` are the four solution suites; each names the portfolio projects behind it.
- Every project appears in the hero wall automatically.

## 6. Where the pictures came from

All portfolio pictures are stored optimised as WebP at two sizes, plus a small fixed-shape thumbnail of
each cover for the hero wall.

- **The platforms** (MechaManPro, the Hospital Management System, the Bin Sultan Fabrics ERP) were run
  on a development machine and photographed there. They are filled with demo data only: no real
  customer, patient or business records appear in any picture. Figures in the Bin Sultan pictures are
  in Pakistani rupees.
- **Client websites that are still online** were photographed fresh in October 2026.
- **Everything else** uses the pictures from the earlier portfolio, resized and recompressed.
- Left out on purpose: pictures showing customer or account data, pictures that were not the client's
  own data, overview images carrying a wrong client name, and stock-style graphics.

The scripts that produced the pictures are not part of this repository.

## 7. Wording decisions

- Descriptions say what was delivered and what is visible in the product. They do not claim results or
  figures that cannot be checked.
- Technology tags and the technology list are only what could be confirmed from the projects.
- The statistics in the hero (projects delivered, clients, and so on) were kept as they were on the
  original site.
- The made-up company names in the old "Trusted by" strip were replaced with the names of businesses
  whose projects are in the portfolio.
- The four suites (Astravane ERP, Health, AI, BI) were "Coming Soon" cards on the original site. They
  now list the delivered systems behind each one instead.
- Industries without delivered work in the portfolio (Banking & Finance, Government, Logistics) are
  listed under "Also serving", without projects.

## 8. Publishing

The repository is public on GitHub, so nothing private belongs in it. The live site
(`astravane.vercel.app`) appears to be deployed from the `main` branch, so treat a push to `main` as
publishing. Work in progress goes on a separate branch first.

## 9. Open items

- Confirm the office address in `src/data/site.js`; the current one looks like a placeholder.
- Add real social links (the old ones pointed nowhere and were removed).
- Privacy Policy and Terms pages do not exist; their footer links were removed.
- Vacancies are a hardcoded concept. "Apply" opens an email to the address in `site.js`.
- The platforms have no public link yet. Add `url` in `projects.js` when they are hosted.
- Seven app projects have only a cover image and a one-line description written from that image:
  Eat Bite, AI Fitex, Funitur, Listex, Management Suite, Mealover and Travelos. Confirm or remove.

## 10. History

- **10 October 2026.** Redesign with the original palette; Products and Work sections; project viewer;
  Careers section; favicon and page title; 27 projects and 131 pictures added.
- **10 October 2026, second pass.** Reworked to show scale: hero wall of all projects, "What we build"
  overview, Platforms showcase of seven systems in place of two product blocks, solution suites and
  industries backed by named projects, technology list.
