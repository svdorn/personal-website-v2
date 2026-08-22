# Personal Website

My personal website, live at https://stephendorn.com

Built with [Vite](https://vite.dev) and React 18.

## Develop

```sh
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build into build/
npm run preview  # serve the production build locally
```

## Editing content

All site content — bio, publications, software, research areas, social links —
lives in [`src/data.js`](src/data.js). Nothing else needs to change to add a
paper or update a link.

To add a publication, append an entry to the `publications` array:

```js
{
  year: 2026,
  name: "Paper title",
  link: "https://…",                          // where the title links
  authors: "A Author, **S Dorn**, B Author",  // ** ** renders bold
  journal: "Nature Genetics",
  featured: true,                             // marks headline venues
  published_journal: "https://…",             // adds a "Journal" chip
  preprint: "https://…",                      // adds a "Preprint" chip
  software: { name: "TOOL", link: "https://github.com/…" },
}
```

Publications are grouped by `year` in the order listed, so keep the array in
reverse-chronological order.

## Layout

```
index.html          entry point (fonts, meta tags, no-flash theme script)
src/
  main.jsx          React root
  App.jsx           section order
  data.js           all content
  styles.css        design tokens + all styling
  components/       Header, Footer, Social, SectionHead, ThemeToggle
  sections/         Hero, Research, Publications, Software, Contact
public/             static assets, served from /
```

Styling is plain CSS with custom properties. The palette is defined once at the
top of `styles.css`; dark mode overrides only those variables. The theme follows
the OS preference until a visitor uses the toggle, which then persists.
