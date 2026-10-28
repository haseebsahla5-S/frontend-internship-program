import { useEffect, useState } from 'react';

/** useState that survives page reloads. Falls back to `initialValue` if storage is unavailable. */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored === null ? initialValue : JSON.parse(stored);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or blocked (private mode) — keep working in memory.
    }
  }, [key, value]);

  return [value, setValue];
}
