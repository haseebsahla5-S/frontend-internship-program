# Month 5 · Advanced React & Professional Practice

Routing, shared state, testing, performance and code review — how teams ship React.

**Outcome:** A tested multi-page store front with routing, a cart and CI-ready quality checks.

Starter code lives in [`starter/`](starter/). Work on a branch per week (`week-NN-topic`) and open a pull request when the deliverable is ready.

## Week 17 — Routing

- [ ] Set up React Router: layout routes, nested routes, URL params, 404 page.
- [ ] Build Home, Products, ProductDetail and Cart pages in the starter.
- [ ] Load products from https://fakestoreapi.com/products (or the local mock).
- [ ] Keep search/filter state in the URL with useSearchParams.

**Deliverable:** Navigable product catalogue with detail pages and deep links.

## Week 18 — State management with reducer + context

- [ ] Model cart actions (add, remove, change quantity, clear) in cartReducer.
- [ ] Expose the cart through CartContext and a useCart hook.
- [ ] Show item count in the header and totals on the cart page.
- [ ] Persist the cart to localStorage.

**Deliverable:** Fully working cart shared across pages.

## Week 19 — Testing

- [ ] Unit-test cartReducer for every action (pure functions first).
- [ ] Component-test pages with React Testing Library — query by role, not class.
- [ ] Mock fetch for product loading; test loading and error states.
- [ ] Reach ≥ 70% coverage on src/context and src/pages (npm run coverage).

**Deliverable:** Green test suite with ≥ 70% coverage on cart and pages.

## Week 20 — Performance, quality & month-5 review

- [ ] Profile with React DevTools; apply memo/useMemo/useCallback only where measured.
- [ ] Lazy-load routes with React.lazy and Suspense.
- [ ] Run Lighthouse (performance, a11y, best practices ≥ 90).
- [ ] Review two teammates' pull requests using the review checklist.

**Deliverable:** Milestone 5: optimised, tested store front + two written peer reviews.

## Resources

- [React Router docs](https://reactrouter.com/)
- [react.dev: Scaling up with reducer and context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Testing Library: React](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest guide](https://vitest.dev/guide/)
