import { Link } from 'react-router';
import { useCart } from '../context/CartContext.jsx';

// Week 18 TODO: quantity +/- buttons (setQuantity), remove buttons, a "Clear cart"
// button and the formatted total.
export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <section>
        <h1>Your cart</h1>
        <p>Your cart is empty. <Link to="/products">Browse products</Link></p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} × {item.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
}
