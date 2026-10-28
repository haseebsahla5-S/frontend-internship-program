import { useState } from 'react';
import Button from '../../components/ui/Button.jsx';

// Week 14: port the month-3 to-do app.
// Suggested components: TodoForm, TodoList, TodoItem, TodoFilters.
// Keep `todos` and `filter` here; derive the visible list and counts — don't store them.
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: crypto.randomUUID(), title: trimmed, done: false }]);
    setTitle('');
  }

  // TODO: toggleTodo(id), deleteTodo(id), filter state, "N items left", localStorage

  return (
    <section>
      <h1>To-do</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <label htmlFor="todo-title" className="visually-hidden">New task</label>
        <input id="todo-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What needs doing?" />
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </section>
  );
}
