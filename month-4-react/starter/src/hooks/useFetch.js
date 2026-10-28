import { useEffect, useState } from 'react';

/**
 * Week 15: fetch JSON from `url` whenever it changes.
 * Returns { data, loading, error }. When url is null/empty, do nothing.
 *
 * TODO:
 * - create an AbortController and pass its signal to fetch
 * - set loading true before the request, false after
 * - throw on !response.ok so the error state is set
 * - abort in the cleanup function (and ignore AbortError)
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    // TODO
  }, [url]);

  return { data, loading, error };
}
