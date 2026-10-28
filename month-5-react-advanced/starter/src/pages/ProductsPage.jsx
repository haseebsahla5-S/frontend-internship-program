import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { fetchProducts } from '../services/products.js';

// Week 17 TODO:
// - add a search box and category <select>, stored in the URL with useSearchParams
// - extract ProductCard into src/components
// - show an "Add to cart" button on each card (useCart().addItem)
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;
    fetchProducts()
      .then((data) => {
        if (!ignore) {
          setProducts(data);
          setStatus('done');
        }
      })
      .catch(() => !ignore && setStatus('error'));
    return () => {
      ignore = true;
    };
  }, []);

  if (status === 'loading') return <p role="status">Loading products…</p>;
  if (status === 'error') return <p role="alert">Could not load products. Please try again.</p>;

  return (
    <section>
      <h1>Products</h1>
      <ul className="grid" style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} className="card">
            <img src={product.image} alt="" width="120" height="120" style={{ objectFit: 'contain' }} />
            <h2 style={{ fontSize: '1rem' }}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h2>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
