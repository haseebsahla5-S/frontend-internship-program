import { Link } from 'react-router';

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to the Intern Store</h1>
      <p>Month 5 project: routing, shared cart state, tests and performance.</p>
      <Link to="/products">Browse products →</Link>
    </section>
  );
}
