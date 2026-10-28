import { useState } from 'react';
import Header from './components/Header.jsx';
import Portfolio from './components/Portfolio.jsx';
import TodoApp from './features/todos/TodoApp.jsx';
import GithubSearch from './features/github-search/GithubSearch.jsx';
import styles from './App.module.css';

// Week 13–16 each add a section. Routing comes in month 5 — for now a tab is just state.
const TABS = [
  { id: 'portfolio', label: 'Portfolio (wk 13)', Component: Portfolio },
  { id: 'todos', label: 'To-do (wk 14)', Component: TodoApp },
  { id: 'search', label: 'GitHub search (wk 15)', Component: GithubSearch },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const { Component } = TABS.find((tab) => tab.id === activeTab);

  return (
    <>
      <Header tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className={styles.main}>
        <Component />
      </main>
    </>
  );
}
