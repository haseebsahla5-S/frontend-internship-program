import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../router.jsx';

function renderAt(path) {
  return render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);
}

beforeEach(() => localStorage.clear());

describe('HomePage', () => {
  it('increments and persists the counter', async () => {
    renderAt('/');
    await userEvent.click(screen.getByRole('button', { name: /clicked 0 times/i }));
    expect(screen.getByRole('button', { name: /clicked 1 times/i })).toBeInTheDocument();
    expect(localStorage.getItem('demo-clicks')).toBe('1');
  });
});

describe('routing', () => {
  it('navigates to About from the main nav', async () => {
    renderAt('/');
    await userEvent.click(screen.getByRole('link', { name: 'About' }));
    expect(await screen.findByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('renders 404 for unknown URLs', () => {
    renderAt('/nope');
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
  });
});
