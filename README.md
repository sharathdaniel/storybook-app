# storybook-app

A **React + Storybook component library**, styled with [StyleBase](https://github.com/sharathdaniel/style-base) and integrating [KendoReact](https://www.telerik.com/kendo-react-ui) components.

It pairs a small set of token-driven UI primitives (Button, Badge, form controls) with a few KendoReact components, all themed through the StyleBase SCSS system and explorable in Storybook.

---

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build
- **Storybook 10** — component explorer and docs
- **KendoReact** — DatePicker, DropDownList, NumericTextBox (free-tier components)
- **StyleBase** — SCSS architecture (tokens, themes, CSS layers)

---

## Getting Started

```bash
npm install

npm run dev          # Vite app          → http://localhost:5173
npm run storybook    # component explorer → http://localhost:6006
npm run build        # type-check + production build
npm run preview      # preview the production build
```

Quality:

```bash
npm run lint         # ESLint (TS/React)
npm run lint:scss    # Stylelint (SCSS)
npm run format:check # Prettier check
```

---

## What's Inside

```
src/
├── components/   StyleBase UI primitives — Button, IconButton, Badge,
│                 TextField, Textarea, Checkbox, Radio, Toggle
├── stories/      Storybook stories (incl. 3 KendoReact components)
├── layout/       App shell — MainLayout, MainHeader, Sidebar
├── pages/        ComponentsDemo (demo page)
├── icons/        SVG sprite icon system
└── scss/         The StyleBase system (see Styling)
```

Components use React 19's ref-as-prop pattern and consume only StyleBase semantic
tokens, so they stay theme-aware (light/dark) without per-component overrides.

The KendoReact theme is scoped to only the components in use, keeping the CSS
bundle lean (see `src/scss/vendor/`).

---

## Styling — StyleBase

The full SCSS system lives under `src/scss/` (tokens, abstracts, base, components,
layout, utilities) on a layered cascade: `reset, base, plugins, components, utilities`.

- **Architecture & rules:** [`AGENTS.md`](AGENTS.md) — the canonical StyleBase rules enforced in this repo (also read by Claude Code via `CLAUDE.md`, and by Cursor via `.cursor/rules/`).
- **Full StyleBase docs:** https://github.com/sharathdaniel/style-base
- **Adopting StyleBase elsewhere:** [`INSTALLATION.md`](INSTALLATION.md)

---

## Tooling

- **Stylelint** + **Prettier** — SCSS linting and formatting
- **Husky** + **lint-staged** — pre-commit enforcement
- **LF line endings** — enforced via `.gitattributes`, `.editorconfig`, and Prettier

For this repo only:

```bash
git config core.autocrlf false
git config core.eol lf
```

---

## AI-Assisted Development (Storybook MCP)

`@storybook/addon-mcp` exposes a Model Context Protocol server while Storybook runs
(`http://localhost:6006/mcp`, registered in `.mcp.json`). AI coding agents can use it
to discover the real component APIs before generating UI — see the discovery rules in
[`AGENTS.md`](AGENTS.md).

---

## License

Released under the **Zero-Clause BSD License (0BSD)** — see [LICENSE](LICENSE).
