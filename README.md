# Alif Haider

Personal portfolio and blog built with Astro.

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Commands

| Command             | Action                                   |
| :------------------ | :--------------------------------------- |
| `bun install`       | Installs dependencies                    |
| `bun dev`           | Starts local dev server at `localhost:4321` |
| `bun build`         | Build your production site to `./dist/`  |
| `bun preview`       | Preview your build locally               |
| `bun check`         | Type-check with `astro check`            |

## Structure

- `src/pages/index.astro` — portfolio home (two-column editorial layout)
- `src/pages/blog/index.astro` — blog journal
- `src/pages/blog/[slug].astro` — individual notes
- `src/content/blog/*.mdx` — blog posts (content collection)
- `src/styles/global.css` — design tokens, themes, and layout styles
- `src/components/ThemeToggle.astro` — dark/light mode toggle

Blog post frontmatter fields: `title`, `description`, `date`, `tags`, `readTime`, `stack`, `sketch` (`flow` | `columns` | `queue`).

## Notes

- Theme (light/dark) is stored in `localStorage` and set before paint to avoid flashes.
- Fonts: Inter + Newsreader via Google Fonts.
- Social links and project hrefs in `src/pages/index.astro` are placeholders where real URLs were not provided — replace them.