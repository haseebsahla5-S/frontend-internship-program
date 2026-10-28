# Code review checklist

Use this when reviewing an intern's (or a peer's) pull request. Leave at least one thing done well
and one concrete suggestion.

## Functionality
- [ ] The deliverable for the week works as described.
- [ ] Edge cases handled: empty input, errors, loading states.

## Code quality
- [ ] Names describe intent; no commented-out or dead code.
- [ ] Functions/components are small and do one thing.
- [ ] No duplicated logic that should be shared.

## HTML / accessibility
- [ ] Semantic elements; headings in order; every image has meaningful `alt`.
- [ ] Every form control has a `<label>`; everything works with the keyboard.
- [ ] Colour contrast passes (Lighthouse / DevTools).

## CSS
- [ ] Layout works at 360, 768, 1024 and 1440px.
- [ ] Uses variables for colours/spacing; no `!important` without reason.

## JavaScript / React
- [ ] No user data rendered via `innerHTML` / `dangerouslySetInnerHTML`.
- [ ] State is minimal (nothing derivable stored in state); effects clean up.
- [ ] Lists have stable `key`s.
- [ ] Tests cover the new behaviour (months 5–6).

## Git
- [ ] PR is focused and has a clear description and screenshots for UI changes.
- [ ] Commit messages explain *why*, not just *what*.
