import { Link, useRouteError } from 'react-router';

// Shown by the router when a page throws while rendering or loading.
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <main className="container" role="alert">
      <h1>Something went wrong</h1>
      <p>{error?.statusText || error?.message || 'Unexpected error'}</p>
      <Link to="/">Go home</Link>
    </main>
  );
}
