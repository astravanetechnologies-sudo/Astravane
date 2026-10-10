# Astravane Technologies website: project context

A briefing for anyone (person or AI assistant) picking this project up. It explains what the site is,
how it is put together, where its content came from and what is still open. Day-to-day editing
instructions are in `README.md`.

_Last updated: 10 October 2026._

## 1. What this is

The public company website for Astravane Technologies: a single page that presents the company, its
services, its own products, a portfolio of delivered work and open vacancies.

Before October 2026 the site had the company copy but no portfolio. It was then redesigned and filled
with:

- Astravane's own products: **MechaManPro** (workshop management for garages) and the
  **Hospital Management System** (HMIS / EMR).
- A client system: the **Bin Sultan Fabrics ERP**.
- Client websites, online stores, web apps and mobile apps carried over from the LabridTech portfolio
  site (`github.com/LabridTech/portfolio-web`).
- A Careers section with two vacancies, hardcoded as a concept.

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
  work/<project>/       portfolio pictures (<name>.webp and <name>-sm.webp)
src/
  App.jsx               page composition, theme state, which project is open
  App.css               all styles for the light theme; the colour palette is at the top
  Dark.css              dark theme: variable overrides plus a few adjustments
  assets/               logo files (astravane-mark.webp is the one the page uses)
  components/
    Nav.jsx             header, mobile menu, theme switch, active-section highlight
    Hero.jsx            hero, stats row, scrolling client names
    About.jsx           About, Services, Industries and Approach sections
    Products.jsx        the two featured products with a screen switcher, plus the roadmap cards
    Work.jsx            portfolio grid with category filters and "show all"
    ProjectModal.jsx    project viewer: picture gallery and write-up (native <dialog>)
    Careers.jsx         vacancies
    Footer.jsx          call-to-action banner and footer
    Frame.jsx           browser, phone and plain picture frames
    icons.jsx           maps icon names used in the data files to lucide icons
  data/
    site.js             company details, navigation, services, industries, stats, approach, client names
    projects.js         every portfolio entry
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
- The Products section is a dark band in both themes.
- The logo mark is dark blue, so on dark surfaces it sits on a white rounded tile.
- Scroll-in animation is CSS only (`animation-timeline: view()`), and is switched off for visitors who
  ask for reduced motion. Nothing is hidden when a browser does not support it.

## 5. Content model

Everything a non-developer is likely to change is in `src/data/`.

A project in `projects.js` has: `slug`, `title`, `kind` (`product`, `site`, `webapp` or `mobile`, which
drives the filters), `label`, `summary`, `points`, `tags`, `frame` (`browser` or `plain`) and `images`.
The first image is the card cover. Each image has a caption and a kind: `screen` (wide screenshot),
`cover` (composed overview) or `phone` (portrait app screen).

- A project with a `url` shows a "Live" badge and a "Visit site" link. Only add one for a site that
  opens normally.
- Client sites that no longer open are listed without a link; the old address is kept in a comment
  beside the entry.
- For the two products, the text before the colon in a caption ("Live board: ...") becomes the label of
  its tab in the Products section.

## 6. Where the pictures came from

All portfolio pictures are stored optimised as WebP at two sizes.

- **Astravane products and the Bin Sultan ERP** were run on a development machine and photographed
  there. They are filled with demo data only: no real customer, patient or business records appear in
  any picture. Figures in the Bin Sultan pictures are in Pakistani rupees.
- **Client websites that are still online** were photographed fresh in October 2026.
- **Everything else** uses the pictures from the earlier portfolio, resized and recompressed.
- Left out on purpose: pictures showing customer or account data, pictures that were not the client's
  own data, overview images carrying a wrong client name, and stock-style graphics.

The scripts that produced the pictures are not part of this repository.

## 7. Wording decisions

- Descriptions say what was delivered and what is visible in the product. They do not claim results or
  figures that cannot be checked.
- Technology tags are only what could be confirmed.
- The statistics in the hero (projects delivered, clients, and so on) were kept as they were on the
  original site.
- The made-up company names in the old "Trusted by" strip were replaced with the names of businesses
  whose projects are in the portfolio.

## 8. Publishing

The repository is public on GitHub, so nothing private belongs in it. The live site
(`astravane.vercel.app`) appears to be deployed from the `main` branch, so treat a push to `main` as
publishing. Work in progress goes on a separate branch first.

## 9. Open items

- Confirm the office address in `src/data/site.js`; the current one looks like a placeholder.
- Add real social links (the old ones pointed nowhere and were removed).
- Privacy Policy and Terms pages do not exist; their footer links were removed.
- Vacancies are a hardcoded concept. "Apply" opens an email to the address in `site.js`.
- Neither product is hosted yet, so they have no public link. Add `url` in `projects.js` when they are.
- Seven app projects have only a cover image and a one-line description written from that image:
  Eat Bite, AI Fitex, Funitur, Listex, Management Suite, Mealover and Travelos. Confirm or remove.

## 10. History

- **10 October 2026.** Redesign with the original palette; Products and Work sections; project viewer;
  Careers section; favicon and page title; 27 projects and 131 pictures added.
