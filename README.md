# Astravane Technologies website

The company website: a single page built with React and Vite.

```
npm install
npm run dev       # local preview
npm run build     # production build into dist/
npm run lint
```

## Where the content lives

Everything you are likely to edit is plain data in `src/data/`:

| File | What it holds |
| --- | --- |
| `site.js` | Company details (email, phone, address), navigation, services, industries, stats, approach steps, the client names in the scrolling strip |
| `projects.js` | The portfolio: our products and client work, with descriptions, technology tags, links and pictures |
| `careers.js` | Open vacancies |
| `image-sizes.json` | Pixel size of every portfolio picture (lets the page reserve space before a picture loads) |

The page sections are in `src/components/`. Colours are defined once at the top of `src/App.css`
(light theme) and `src/Dark.css` (dark theme).

## Portfolio pictures

Pictures are in `public/work/<project>/`. Each one has two files: `<name>.webp` (up to 1920 px wide) and
`<name>-sm.webp` (up to 960 px wide, used on cards and thumbnails).

To add a project, put its pictures in a new folder there and add an entry to `projects.js`. The first
picture in the list is the cover. If a picture has no entry in `image-sizes.json` the page still works;
it just cannot reserve the exact space in advance.

A project with a `url` gets a "Live" badge and a "Visit site" link.

Each project also has:

- `kind` (`platform`, `webapp`, `site` or `mobile`): decides which filter and which "What we build" tile it appears under.
- `industry`: must match one of the industry names in `site.js`; it places the project in the Industries section.

Every project is added to the moving wall in the hero automatically. The wall uses a small thumbnail of the cover,
`<cover>-xs.webp` (520 × 325). If that file is missing, the normal cover is shown instead.

The systems shown in the Platforms section, and their order, are the `showcase` list at the bottom of `projects.js`.
