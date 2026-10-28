# Capstone — <project name>

> One-sentence description. **Live demo:** <url>

<!-- Screenshot: add docs/screenshot.png -->

## Features

-

## Tech stack

React 19 · React Router 7 · Vite · Vitest + Testing Library · ESLint · Prettier

## Getting started

```bash
npm install
cp .env.example .env.local   # if your app uses an API
npm run dev
```

| Script             | What it does                  |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start the dev server          |
| `npm test`         | Run tests in watch mode       |
| `npm run coverage` | Test coverage report          |
| `npm run lint`     | ESLint                        |
| `npm run format`   | Prettier                      |
| `npm run build`    | Production build into `dist/` |

## Project structure

```
src/
  components/   shared layout and UI components (ui/ = design-system primitives)
  pages/        one component per route
  hooks/        reusable hooks (useLocalStorage, …)
  services/     API calls (api.js wrapper)
  context/      React context providers
  utils/        pure helpers (formatting, validation)
  styles/       global CSS and design tokens
docs/           proposal, wireframes, screenshots
```

## Decisions & trade-offs

What you chose and why (state management, API, styling).

## What I'd do next

-
