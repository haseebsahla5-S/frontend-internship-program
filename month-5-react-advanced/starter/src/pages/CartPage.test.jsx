import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { CartProvider, useCart } from '../context/CartContext.jsx';
import { routes } from '../router.jsx';

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>,
  );
}

describe('CartPage', () => {
  it('shows an empty-cart message with a link to products', () => {
    renderAt('/cart');
    expect(screen.getByRole('heading', { name: /your cart/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse products/i })).toHaveAttribute('href', '/products');
  });

  it('lists items added through the cart context', async () => {
    function AddButton() {
      const { addItem } = useCart();
      return <button onClick={() => addItem({ id: 7, title: 'Mug', price: 9 })}>Add mug</button>;
    }
    const router = createMemoryRouter(routes, { initialEntries: ['/cart'] });
    render(
      <CartProvider>
        <AddButton />
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Add mug' }));
    expect(screen.getByText(/mug × 1/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cart \(1\)/i })).toBeInTheDocument();
  });
});

describe('routing', () => {
  it('renders the 404 page for unknown URLs', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
  });
});

describe('navigation', () => {
  it('opens the products page from the header', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify([{ id: 1, title: 'Mug', price: 9, image: '' }])),
    );
    renderAt('/');
    await userEvent.click(screen.getByRole('link', { name: 'Products' }));
    expect(await screen.findByRole('link', { name: 'Mug' })).toHaveAttribute('href', '/products/1');
    vi.restoreAllMocks();
  });
});
