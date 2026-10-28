import styles from './Header.module.css';

// A finished example component: props in, events out.
export default function Header({ tabs, activeTab, onTabChange }) {
  return (
    <header className={styles.header}>
      <strong>Month 4 · React</strong>
      <nav aria-label="Sections">
        <ul className={styles.tabs}>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={styles.tab}
                aria-current={tab.id === activeTab ? 'page' : undefined}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
