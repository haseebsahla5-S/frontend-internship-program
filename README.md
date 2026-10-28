# Frontend Developer Internship — 6-Month Program

A structured, 24-week internship plan that takes an intern from HTML basics to shipping a tested,
deployed React application. Every week has concrete tasks and a single deliverable; every month has
starter code and ends with a milestone review.

📄 **Full plan (PDF):** [`docs/internship-plan.pdf`](docs/internship-plan.pdf)

## Roadmap

| Month | Weeks | Focus | Outcome | Starter |
|---|---|---|---|---|
| 1 | 1–4 | HTML & web foundations, Git | 3-page semantic, validated portfolio | [month-1-html](month-1-html) |
| 2 | 5–8 | CSS, Flexbox, Grid, responsive design | Responsive themed landing page on GitHub Pages | [month-2-css](month-2-css) |
| 3 | 9–12 | JavaScript, DOM, async/fetch | To-do app + GitHub user search (vanilla JS) | [month-3-javascript](month-3-javascript) |
| 4 | 13–16 | React fundamentals, hooks | React apps + reusable component library | [month-4-react](month-4-react) |
| 5 | 17–20 | Routing, context, testing, performance | Tested multi-page store front | [month-5-react-advanced](month-5-react-advanced) |
| 6 | 21–24 | Capstone | Deployed app, docs and demo | [month-6-capstone](month-6-capstone) |

## Getting started (interns)

1. **Fork** this repository and clone your fork.
2. Install [Node.js LTS](https://nodejs.org/) (v20+), [Git](https://git-scm.com/) and [VS Code](https://code.visualstudio.com/).
3. Open the current month's `README.md` and work through the weekly checklist.
4. Use one branch per week (`week-03-semantic-html`) and open a pull request for review.
5. Submit a weekly report every Friday using [`templates/weekly-report.md`](templates/weekly-report.md)
   (or the *Weekly report* issue template).

### Running the starters

| Month | How to run |
|---|---|
| 1–2 | Open `starter/index.html` in a browser, or use the VS Code *Live Server* extension. |
| 3 | Exercises: `cd month-3-javascript/starter && npm test`. Apps: open `todo-app/index.html` / `api-app/index.html` with Live Server. |
| 4–6 | `cd month-N-*/starter && npm install && npm run dev` |

## Weekly rhythm

- **Monday** — plan the week, create issues on your board.
- **Daily** — 15-minute stand-up (yesterday / today / blockers), at least one commit.
- **Wednesday** — mid-week mentor check-in, open a draft PR.
- **Friday** — demo, merge reviewed PRs, submit the weekly report.

## Assessment

| Area | Weight |
|---|---|
| Functionality | 25% |
| Code quality | 25% |
| Accessibility & responsiveness | 15% |
| Git & collaboration | 15% |
| Communication | 20% |

Mentors use [`templates/code-review-checklist.md`](templates/code-review-checklist.md) when reviewing PRs.

## Repository layout

```
docs/                    6-month plan (PDF + printable HTML source)
month-1-html/            Week 1–4 tasks + HTML starter pages
month-2-css/             Week 5–8 tasks + landing-page starter
month-3-javascript/      Week 9–12 tasks + exercises (with tests), to-do and API apps
month-4-react/           Week 13–16 tasks + Vite/React starter
month-5-react-advanced/  Week 17–20 tasks + Router/Context/Vitest starter
month-6-capstone/        Week 21–24 tasks + production-ready project template
templates/               Weekly report and code-review checklist
scripts/build_plan.py    Regenerates month READMEs and the PDF from one source
```

## For mentors: editing the plan

The weekly tasks are defined once in [`scripts/build_plan.py`](scripts/build_plan.py). After editing,
run `python3 scripts/build_plan.py` to regenerate every month README, `docs/internship-plan.html`
and `docs/internship-plan.pdf` (requires Google Chrome or Chromium).

## License

[MIT](LICENSE)
