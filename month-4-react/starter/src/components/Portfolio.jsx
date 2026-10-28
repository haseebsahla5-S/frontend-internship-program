import Card from './ui/Card.jsx';

// Week 13: replace this data with your own and split the page into
// Hero, ProjectList/ProjectCard and Footer components.
const projects = [
  { id: 'portfolio', title: 'HTML portfolio', description: 'Month 1 — semantic, validated pages.' },
  { id: 'landing', title: 'Landing page', description: 'Month 2 — responsive layout with themes.' },
  { id: 'todo', title: 'To-do app', description: 'Month 3 — vanilla JS with localStorage.' },
];

export default function Portfolio() {
  return (
    <section>
      <h1>Hi, I&apos;m TODO</h1>
      <p>TODO: a short introduction.</p>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))' }}>
        {projects.map((project) => (
          <Card key={project.id} title={project.title}>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
