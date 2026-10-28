import { NavLink, Outlet } from 'react-router';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <a className="visually-hidden" href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          My Capstone
        </NavLink>
        <nav aria-label="Main">
          <ul className={styles.nav}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main" className="container">
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>Built during the Frontend Developer Internship.</p>
      </footer>
    </>
  );
}
