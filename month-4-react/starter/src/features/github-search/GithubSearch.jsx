import { useState } from 'react';
// import useFetch from '../../hooks/useFetch.js';

// Week 15: port the month-3 GitHub user search.
// 1. Debounce `query` (write a useDebouncedValue hook).
// 2. Build the URL only when the debounced query is non-empty:
//    https://api.github.com/search/users?q=<query>&per_page=12
// 3. const { data, loading, error } = useFetch(url);
// 4. Render loading / error / empty / results states as separate components.
export default function GithubSearch() {
  const [query, setQuery] = useState('');

  return (
    <section>
      <h1>GitHub user search</h1>
      <label htmlFor="gh-search">Search users</label>
      <input id="gh-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>TODO: results for “{query}”</p>
    </section>
  );
}
