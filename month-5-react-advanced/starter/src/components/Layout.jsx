import { NavLink, Outlet } from 'react-router';
import { useCart } from '../context/CartContext.jsx';

export default function Layout() {
  const { itemCount } = useCart();

  return (
    <>
      <header className="card" style={{ borderRadius: 0, display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <strong>Intern Store</strong>
        <nav aria-label="Main" style={{ display: 'flex', gap: '1rem' }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart ({itemCount})</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
