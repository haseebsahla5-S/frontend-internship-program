// Week 16 TODO: move these inline styles into Card.module.css and add an
// optional `footer` prop. Keep using `children` for the body.
export default function Card({ title, children }) {
  return (
    <article style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </article>
  );
}
