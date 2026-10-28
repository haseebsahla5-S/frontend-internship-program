import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import useLocalStorage from '../hooks/useLocalStorage.js';

// Replace this page with your project's home screen. The counter demonstrates
// the useLocalStorage hook and is covered by HomePage.test.jsx.
export default function HomePage() {
  const [visits, setVisits] = useLocalStorage('demo-clicks', 0);
  const [message] = useState('Your capstone starts here.');

  return (
    <section>
      <h1>{message}</h1>
      <p>Read docs/PROPOSAL.md, then replace this page with your first user story.</p>
      <Button onClick={() => setVisits(visits + 1)}>Clicked {visits} times</Button>
    </section>
  );
}
