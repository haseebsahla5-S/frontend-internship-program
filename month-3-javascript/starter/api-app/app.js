// Week 12 — GitHub user search with fetch + async/await.
// API docs: https://docs.github.com/en/rest/search/search#search-users
// Unauthenticated requests are rate-limited (10 searches/minute) — handle the 403!

const API = 'https://api.github.com/search/users';

const input = document.querySelector('#search');
const status = document.querySelector('#status');
const results = document.querySelector('#results');

/**
 * TODO: return a debounced version of fn that only runs after `delay` ms
 * without another call.
 */
function debounce(fn, delay) {
  return fn;
}

/**
 * TODO: fetch `${API}?q=${encodeURIComponent(query)}&per_page=12`
 * - throw an Error with a friendly message if !response.ok (special-case 403 rate limit)
 * - return the `items` array from the JSON body
 */
async function searchUsers(query) {
  return [];
}

/** TODO: build an <li class="user-card"> with avatar (alt text!), login and a link to html_url. */
function renderUser(user) {
  const li = document.createElement('li');
  li.textContent = user.login;
  return li;
}

async function handleSearch() {
  const query = input.value.trim();
  if (!query) {
    results.replaceChildren();
    status.textContent = '';
    return;
  }
  // TODO:
  // 1. status "Searching…"
  // 2. await searchUsers(query) inside try/catch
  // 3. on success: render cards, status "N users found" or "No users found"
  // 4. on error: clear results and show error.message in status
}

input.addEventListener('input', debounce(handleSearch, 400));
