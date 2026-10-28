#!/usr/bin/env python3
"""Generate the month READMEs, docs/internship-plan.html and docs/internship-plan.pdf
from the single PLAN definition below.

Usage:  python3 scripts/build_plan.py
The PDF step needs Google Chrome (or Chromium) installed; set CHROME=/path/to/chrome
to override the auto-detected binary.
"""
import html
import os
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PROGRAM = "Frontend Developer Internship"
SUBTITLE = "A 6-month, 24-week program: HTML → CSS → JavaScript → React → Capstone"
REPO_URL = "https://github.com/mahfoos/frontend-internship-program"

PLAN = [
    {
        "dir": "month-1-html",
        "title": "Month 1 · HTML & Web Foundations",
        "summary": "Set up a professional workflow and learn to write valid, semantic, accessible HTML.",
        "outcome": "A 3-page personal portfolio in semantic HTML with zero W3C validator errors.",
        "resources": [
            ("MDN: Getting started with the web", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"),
            ("MDN: HTML basics", "https://developer.mozilla.org/en-US/docs/Learn/HTML"),
            ("Pro Git (chapters 1–3)", "https://git-scm.com/book/en/v2"),
            ("W3C Markup Validator", "https://validator.w3.org/"),
        ],
        "weeks": [
            {
                "title": "Dev environment, Git & GitHub",
                "tasks": [
                    "Install VS Code, Node.js LTS, Git and a modern browser; enable format-on-save.",
                    "Configure Git (name, email, SSH key) and learn clone, status, add, commit, push, pull.",
                    "Practise branching: create a branch, open a pull request, respond to review comments.",
                    "Fork this repository and add yourself to INTERNS.md through a pull request.",
                ],
                "deliverable": "Merged PR adding you to INTERNS.md, plus your first weekly report.",
            },
            {
                "title": "HTML document structure",
                "tasks": [
                    "Learn doctype, <html>, <head>, <meta>, <title> and how the browser parses a page.",
                    "Use headings, paragraphs, lists, links (relative/absolute) and images with width/height.",
                    "Complete month-1-html/starter/index.html: a personal home page with a short bio.",
                    "Use browser DevTools to inspect the DOM of three websites you like.",
                ],
                "deliverable": "A home page with correct document structure and at least one image and list.",
            },
            {
                "title": "Semantic HTML & accessibility",
                "tasks": [
                    "Rebuild layouts with header, nav, main, section, article, aside and footer.",
                    "Write meaningful alt text, keep a logical heading order, add a skip link.",
                    "Link the three starter pages (home, about, contact) with a shared nav.",
                    "Run Lighthouse and reach an accessibility score of 90+.",
                ],
                "deliverable": "3-page site with shared navigation and a Lighthouse accessibility score ≥ 90.",
            },
            {
                "title": "Forms, tables & month-1 review",
                "tasks": [
                    "Build the contact form: labels, fieldset/legend, input types, required, pattern.",
                    "Build a weekly timetable using <table>, <caption>, <thead> and scope attributes.",
                    "Validate every page with the W3C validator and fix all errors.",
                    "Demo your portfolio to your mentor; collect feedback as GitHub issues.",
                ],
                "deliverable": "Milestone 1: validated 3-page portfolio, reviewed and merged.",
            },
        ],
    },
    {
        "dir": "month-2-css",
        "title": "Month 2 · CSS & Responsive Design",
        "summary": "Style pages confidently with modern layout, responsive design and maintainable CSS.",
        "outcome": "A responsive landing page (360px–1440px) with light/dark themes, deployed to GitHub Pages.",
        "resources": [
            ("MDN: CSS first steps", "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"),
            ("Flexbox Froggy", "https://flexboxfroggy.com/"),
            ("Grid Garden", "https://cssgridgarden.com/"),
            ("web.dev: Learn Responsive Design", "https://web.dev/learn/design/"),
        ],
        "weeks": [
            {
                "title": "Selectors, cascade & the box model",
                "tasks": [
                    "Learn selectors, specificity, inheritance and the cascade order.",
                    "Master the box model: margin, border, padding, box-sizing.",
                    "Use rem, em, %, vw/vh and know when each is appropriate.",
                    "Style your month-1 portfolio with an external stylesheet (no inline styles).",
                ],
                "deliverable": "Portfolio styled with a consistent type scale and spacing.",
            },
            {
                "title": "Flexbox",
                "tasks": [
                    "Finish all 24 levels of Flexbox Froggy.",
                    "Build a navbar that collapses gracefully on small screens.",
                    "Build a row of feature cards with equal heights and wrapping.",
                    "Centre content horizontally and vertically three different ways.",
                ],
                "deliverable": "Header and feature-card sections of the month-2 starter, built with Flexbox.",
            },
            {
                "title": "Grid & responsive layouts",
                "tasks": [
                    "Finish Grid Garden; learn grid-template-areas, fr units, minmax() and auto-fit.",
                    "Adopt a mobile-first approach with min-width media queries.",
                    "Use clamp() for fluid typography and responsive images with srcset.",
                    "Test layouts at 360, 768, 1024 and 1440px in DevTools device mode.",
                ],
                "deliverable": "Responsive gallery/pricing section that works at all four breakpoints.",
            },
            {
                "title": "Theming, animation & month-2 review",
                "tasks": [
                    "Move colours and spacing into CSS custom properties (variables.css).",
                    "Add a dark theme with prefers-color-scheme; respect prefers-reduced-motion.",
                    "Add hover/focus states and subtle transitions; name classes with BEM.",
                    "Deploy the landing page to GitHub Pages.",
                ],
                "deliverable": "Milestone 2: deployed responsive landing page with light/dark themes.",
            },
        ],
    },
    {
        "dir": "month-3-javascript",
        "title": "Month 3 · JavaScript",
        "summary": "Learn the language, manipulate the DOM and talk to real APIs.",
        "outcome": "A persisted to-do app and an API-driven search app in vanilla JavaScript.",
        "resources": [
            ("javascript.info (Part 1 & 2)", "https://javascript.info/"),
            ("MDN: JavaScript Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"),
            ("MDN: Using the Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"),
            ("Node.js test runner", "https://nodejs.org/api/test.html"),
        ],
        "weeks": [
            {
                "title": "Language fundamentals",
                "tasks": [
                    "Variables (let/const), types, operators, equality, truthy/falsy.",
                    "Conditionals, loops, functions, arrow functions, scope and closures.",
                    "Implement every function in starter/exercises/week-09.js.",
                    "Run npm test inside starter/ until all week-9 tests pass.",
                ],
                "deliverable": "All week-9 exercises passing.",
            },
            {
                "title": "Arrays, objects & modules",
                "tasks": [
                    "Array methods: map, filter, reduce, find, some, every, sort.",
                    "Objects, destructuring, spread/rest, optional chaining.",
                    "Split code into ES modules with import/export.",
                    "Implement every function in starter/exercises/week-10.js.",
                ],
                "deliverable": "All week-10 exercises passing.",
            },
            {
                "title": "DOM & events",
                "tasks": [
                    "querySelector, createElement, textContent vs innerHTML (and why XSS matters).",
                    "Event listeners, event delegation, form submit handling.",
                    "Complete starter/todo-app: add, toggle, delete, filter (all/active/done).",
                    "Persist todos in localStorage so they survive a reload.",
                ],
                "deliverable": "Working, keyboard-accessible to-do app.",
            },
            {
                "title": "Async JavaScript & month-3 review",
                "tasks": [
                    "Promises, async/await, try/catch and the event loop.",
                    "fetch() with loading, empty and error states.",
                    "Complete starter/api-app: search GitHub users and show their profile cards.",
                    "Debounce the search input; handle API rate-limit errors gracefully.",
                ],
                "deliverable": "Milestone 3: to-do app + GitHub user search, both deployed.",
            },
        ],
    },
    {
        "dir": "month-4-react",
        "title": "Month 4 · React Fundamentals",
        "summary": "Think in components, manage state and fetch data the React way.",
        "outcome": "The to-do and search apps rebuilt in React, plus a small reusable component library.",
        "resources": [
            ("react.dev: Learn", "https://react.dev/learn"),
            ("react.dev: Thinking in React", "https://react.dev/learn/thinking-in-react"),
            ("Vite guide", "https://vite.dev/guide/"),
            ("react.dev: You Might Not Need an Effect", "https://react.dev/learn/you-might-not-need-an-effect"),
        ],
        "weeks": [
            {
                "title": "Tooling, JSX, components & props",
                "tasks": [
                    "npm basics: package.json, scripts, dependencies vs devDependencies.",
                    "Run the Vite starter; learn JSX rules and component file structure.",
                    "Break your portfolio into Header, Hero, ProjectCard and Footer components.",
                    "Pass data with props; render lists with stable keys.",
                ],
                "deliverable": "Portfolio rebuilt as React components.",
            },
            {
                "title": "State & events",
                "tasks": [
                    "useState, event handlers, controlled inputs.",
                    "Lifting state up and passing callbacks to children.",
                    "Conditional rendering and derived state (avoid duplicating state).",
                    "Port the month-3 to-do app into src/features/todos.",
                ],
                "deliverable": "React to-do app with the same features as the vanilla version.",
            },
            {
                "title": "Effects, data fetching & custom hooks",
                "tasks": [
                    "useEffect, dependency arrays and cleanup; AbortController for fetches.",
                    "Implement the useFetch hook in src/hooks/useFetch.js.",
                    "Port the GitHub user search using useFetch and a debounced query.",
                    "Handle loading, error and empty states as components.",
                ],
                "deliverable": "React GitHub search powered by your own useFetch hook.",
            },
            {
                "title": "Component design & month-4 review",
                "tasks": [
                    "Build reusable Button, Card, Modal and Input components (src/components/ui).",
                    "Use composition and the children prop instead of deep prop lists.",
                    "Style with CSS Modules; keep components accessible (focus trap in Modal).",
                    "Write a short usage doc for each component in the README.",
                ],
                "deliverable": "Milestone 4: component library + both apps, reviewed and merged.",
            },
        ],
    },
    {
        "dir": "month-5-react-advanced",
        "title": "Month 5 · Advanced React & Professional Practice",
        "summary": "Routing, shared state, testing, performance and code review — how teams ship React.",
        "outcome": "A tested multi-page store front with routing, a cart and CI-ready quality checks.",
        "resources": [
            ("React Router docs", "https://reactrouter.com/"),
            ("react.dev: Scaling up with reducer and context", "https://react.dev/learn/scaling-up-with-reducer-and-context"),
            ("Testing Library: React", "https://testing-library.com/docs/react-testing-library/intro/"),
            ("Vitest guide", "https://vitest.dev/guide/"),
        ],
        "weeks": [
            {
                "title": "Routing",
                "tasks": [
                    "Set up React Router: layout routes, nested routes, URL params, 404 page.",
                    "Build Home, Products, ProductDetail and Cart pages in the starter.",
                    "Load products from https://fakestoreapi.com/products (or the local mock).",
                    "Keep search/filter state in the URL with useSearchParams.",
                ],
                "deliverable": "Navigable product catalogue with detail pages and deep links.",
            },
            {
                "title": "State management with reducer + context",
                "tasks": [
                    "Model cart actions (add, remove, change quantity, clear) in cartReducer.",
                    "Expose the cart through CartContext and a useCart hook.",
                    "Show item count in the header and totals on the cart page.",
                    "Persist the cart to localStorage.",
                ],
                "deliverable": "Fully working cart shared across pages.",
            },
            {
                "title": "Testing",
                "tasks": [
                    "Unit-test cartReducer for every action (pure functions first).",
                    "Component-test pages with React Testing Library — query by role, not class.",
                    "Mock fetch for product loading; test loading and error states.",
                    "Reach ≥ 70% coverage on src/context and src/pages (npm run coverage).",
                ],
                "deliverable": "Green test suite with ≥ 70% coverage on cart and pages.",
            },
            {
                "title": "Performance, quality & month-5 review",
                "tasks": [
                    "Profile with React DevTools; apply memo/useMemo/useCallback only where measured.",
                    "Lazy-load routes with React.lazy and Suspense.",
                    "Run Lighthouse (performance, a11y, best practices ≥ 90).",
                    "Review two teammates' pull requests using the review checklist.",
                ],
                "deliverable": "Milestone 5: optimised, tested store front + two written peer reviews.",
            },
        ],
    },
    {
        "dir": "month-6-capstone",
        "title": "Month 6 · Capstone Project",
        "summary": "Plan, build, test, deploy and present a production-quality app on your own.",
        "outcome": "A deployed capstone app with tests, documentation and a recorded demo.",
        "resources": [
            ("GitHub Projects (planning boards)", "https://docs.github.com/en/issues/planning-and-tracking-with-projects"),
            ("Vercel: deploy a Vite app", "https://vercel.com/docs/frameworks/vite"),
            ("Netlify: deploy a site", "https://docs.netlify.com/site-deploys/create-deploys/"),
            ("WCAG 2.2 quick reference", "https://www.w3.org/WAI/WCAG22/quickref/"),
        ],
        "weeks": [
            {
                "title": "Proposal & planning",
                "tasks": [
                    "Pick a project (see ideas below) and fill in docs/PROPOSAL.md.",
                    "Write user stories with acceptance criteria; sketch wireframes.",
                    "Create GitHub issues and a project board with milestones for weeks 22–24.",
                    "Get mentor sign-off on scope before writing feature code.",
                ],
                "deliverable": "Approved proposal, wireframes and a populated project board.",
            },
            {
                "title": "Build core features",
                "tasks": [
                    "Set up routing, layout and the data layer (src/services).",
                    "Ship the must-have user stories behind small, reviewed PRs.",
                    "Write tests alongside each feature.",
                    "Daily stand-up note: yesterday, today, blockers.",
                ],
                "deliverable": "All must-have stories working on the main branch.",
            },
            {
                "title": "Complete, harden & test",
                "tasks": [
                    "Finish should-have stories; form validation and error boundaries.",
                    "Responsive pass (360–1440px) and accessibility pass (keyboard, screen reader, contrast).",
                    "npm run lint and npm test clean; CI green on every PR.",
                    "Fix all bugs filed by mentor/peer testing.",
                ],
                "deliverable": "Feature-complete, tested and accessible app.",
            },
            {
                "title": "Deploy, document & present",
                "tasks": [
                    "Deploy to Vercel, Netlify or GitHub Pages; add the live URL to the README.",
                    "Write the README: features, screenshots, tech stack, setup, decisions.",
                    "Present a 10-minute demo and a short retrospective to the team.",
                    "Final evaluation with your mentor using the rubric.",
                ],
                "deliverable": "Final milestone: live app, polished README, demo and evaluation.",
            },
        ],
    },
]

RUBRIC = [
    ("Functionality", "25%", "Features work as specified, edge cases and errors handled."),
    ("Code quality", "25%", "Readable, consistent, small components/functions, no dead code."),
    ("Accessibility & responsiveness", "15%", "Semantic markup, keyboard support, 360–1440px layouts."),
    ("Git & collaboration", "15%", "Small focused PRs, clear commit messages, constructive reviews."),
    ("Communication", "20%", "Weekly reports on time, clear demos, asks for help early."),
]

RHYTHM = [
    ("Monday", "Plan the week: read the week's tasks, create issues on your board."),
    ("Daily", "15-minute stand-up (yesterday / today / blockers) and at least one commit."),
    ("Wednesday", "Mid-week check-in with your mentor; open a draft PR."),
    ("Friday", "Demo, merge reviewed PRs, submit the weekly report (templates/weekly-report.md)."),
]

CAPSTONE_IDEAS = [
    "Personal finance / expense tracker with charts and budgets",
    "Recipe finder with filters, favourites and a shopping list",
    "Job board with search, saved jobs and application tracking",
    "Habit tracker with streaks and calendar heat-map",
    "Event booking UI with seat selection and a checkout flow",
]


def all_weeks():
    n = 0
    for month in PLAN:
        for week in month["weeks"]:
            n += 1
            yield n, month, week


def week_numbers(month):
    return [n for n, m, _ in all_weeks() if m is month]


def month_readme(month):
    lines = [f"# {month['title']}", "", month["summary"], "",
             f"**Outcome:** {month['outcome']}", "",
             "Starter code lives in [`starter/`](starter/). Work on a branch per week "
             "(`week-NN-topic`) and open a pull request when the deliverable is ready.", ""]
    for n, week in zip(week_numbers(month), month["weeks"]):
        lines += [f"## Week {n} — {week['title']}", ""]
        lines += [f"- [ ] {t}" for t in week["tasks"]]
        lines += ["", f"**Deliverable:** {week['deliverable']}", ""]
    if month["dir"] == "month-6-capstone":
        lines += ["## Capstone ideas", ""] + [f"- {i}" for i in CAPSTONE_IDEAS] + [""]
    lines += ["## Resources", ""] + [f"- [{name}]({url})" for name, url in month["resources"]] + [""]
    return "\n".join(lines)


def esc(s):
    return html.escape(s, quote=False)


def plan_html():
    total = sum(len(m["weeks"]) for m in PLAN)
    overview_rows = "".join(
        f"<tr><td>{esc(m['title'].split(' · ')[0])}</td><td>Weeks {week_numbers(m)[0]}–{week_numbers(m)[-1]}</td>"
        f"<td><strong>{esc(m['title'].split(' · ')[1])}</strong><br>{esc(m['outcome'])}</td></tr>"
        for m in PLAN)
    months = []
    for m in PLAN:
        weeks = []
        for n, w in zip(week_numbers(m), m["weeks"]):
            tasks = "".join(f"<li>{esc(t)}</li>" for t in w["tasks"])
            weeks.append(
                f"<div class='week'><h3><span class='wk'>Week {n}</span>{esc(w['title'])}</h3>"
                f"<ul class='tasks'>{tasks}</ul>"
                f"<p class='deliv'><strong>Deliverable:</strong> {esc(w['deliverable'])}</p></div>")
        res = "".join(f"<li>{esc(name)} — <span class='url'>{esc(url)}</span></li>" for name, url in m["resources"])
        extra = ""
        if m["dir"] == "month-6-capstone":
            extra = "<h4>Capstone ideas</h4><ul>" + "".join(f"<li>{esc(i)}</li>" for i in CAPSTONE_IDEAS) + "</ul>"
        months.append(
            f"<section class='month'><h2>{esc(m['title'])}</h2><p class='summary'>{esc(m['summary'])}</p>"
            f"<p class='outcome'><strong>Outcome:</strong> {esc(m['outcome'])}<br>"
            f"<strong>Starter:</strong> <code>{m['dir']}/starter</code></p>"
            f"{''.join(weeks)}{extra}<h4>Resources</h4><ul class='res'>{res}</ul></section>")
    rubric = "".join(f"<tr><td>{esc(a)}</td><td>{b}</td><td>{esc(c)}</td></tr>" for a, b, c in RUBRIC)
    rhythm = "".join(f"<tr><td>{esc(a)}</td><td>{esc(b)}</td></tr>" for a, b in RHYTHM)
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{PROGRAM} — 6-Month Plan</title>
<style>
  @page {{ size: A4; margin: 18mm 16mm; }}
  * {{ box-sizing: border-box; }}
  body {{ font: 10.5pt/1.5 -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; color: #1f2328; margin: 0; }}
  h1 {{ font-size: 26pt; margin: 0 0 4pt; letter-spacing: -0.5pt; }}
  h2 {{ font-size: 16pt; margin: 0 0 4pt; color: #0b5cad; }}
  h3 {{ font-size: 11.5pt; margin: 0 0 4pt; }}
  h4 {{ font-size: 10.5pt; margin: 10pt 0 2pt; }}
  .cover {{ padding: 30mm 0 10mm; border-bottom: 3px solid #0b5cad; margin-bottom: 14pt; }}
  .cover p {{ font-size: 13pt; color: #57606a; margin: 0; }}
  .cover .repo {{ font-size: 10.5pt; margin-top: 6pt; color: #0b5cad; }}
  table {{ width: 100%; border-collapse: collapse; margin: 6pt 0 14pt; }}
  th, td {{ text-align: left; vertical-align: top; padding: 5pt 7pt; border-bottom: 1px solid #d0d7de; }}
  th {{ background: #f6f8fa; font-size: 9.5pt; text-transform: uppercase; letter-spacing: .4pt; }}
  .month {{ break-before: page; }}
  .summary {{ color: #57606a; margin: 0 0 4pt; }}
  .outcome {{ background: #eef6ff; border-left: 3px solid #0b5cad; padding: 6pt 9pt; margin: 6pt 0 10pt; }}
  .week {{ border: 1px solid #d0d7de; border-radius: 6px; padding: 8pt 10pt; margin-bottom: 8pt; break-inside: avoid; }}
  .wk {{ display: inline-block; background: #0b5cad; color: #fff; border-radius: 4px; padding: 0 6pt; margin-right: 6pt; font-size: 9pt; }}
  .tasks {{ margin: 4pt 0; padding-left: 16pt; }}
  .tasks li {{ list-style: "☐  "; }}
  .deliv {{ margin: 4pt 0 0; font-size: 10pt; }}
  .res, ul {{ margin: 2pt 0; padding-left: 16pt; }}
  .url {{ color: #57606a; font-size: 9pt; word-break: break-all; }}
  code {{ font: 9.5pt ui-monospace, Menlo, monospace; background: #f6f8fa; padding: 0 3pt; border-radius: 3px; }}
</style>
</head>
<body>
<header class="cover">
  <h1>{PROGRAM}</h1>
  <p>{esc(SUBTITLE)}</p>
  <p class="repo">Starter code &amp; templates: {REPO_URL}</p>
</header>

<h2>Program overview</h2>
<p>Interns progress from zero to shipping a production-quality React application over {total} weeks.
Each week has concrete tasks and one deliverable, reviewed through a GitHub pull request. Each month ends
with a milestone review. Starter code for every month is in the companion repository.</p>
<table><thead><tr><th>Month</th><th>Weeks</th><th>Focus &amp; outcome</th></tr></thead><tbody>{overview_rows}</tbody></table>

<h2>Weekly rhythm</h2>
<table><tbody>{rhythm}</tbody></table>

<h2>Assessment rubric</h2>
<p>Each monthly milestone and the final capstone are scored with this rubric (1–5 per area, weighted).</p>
<table><thead><tr><th>Area</th><th>Weight</th><th>What good looks like</th></tr></thead><tbody>{rubric}</tbody></table>

{''.join(months)}
</body>
</html>
"""


def find_chrome():
    candidates = [
        os.environ.get("CHROME"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        shutil.which("google-chrome"),
        shutil.which("chromium"),
        shutil.which("chromium-browser"),
    ]
    return next((c for c in candidates if c and Path(c).exists()), None)


def main():
    for month in PLAN:
        (ROOT / month["dir"] / "README.md").write_text(month_readme(month))
    html_path = ROOT / "docs" / "internship-plan.html"
    html_path.write_text(plan_html())
    chrome = find_chrome()
    if not chrome:
        print("Chrome not found; wrote HTML only. Set CHROME=/path/to/chrome to build the PDF.")
        return
    pdf_path = ROOT / "docs" / "internship-plan.pdf"
    subprocess.run([chrome, "--headless", "--disable-gpu", "--no-pdf-header-footer",
                    f"--print-to-pdf={pdf_path}", html_path.as_uri()],
                   check=True, capture_output=True)
    print(f"Wrote {pdf_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
