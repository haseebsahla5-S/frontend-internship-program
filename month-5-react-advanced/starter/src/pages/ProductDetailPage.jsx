import { useParams } from 'react-router';

// Week 17 TODO: fetch the product with fetchProduct(productId), handle
// loading / error / not-found, and render image, title, price, description
// and an "Add to cart" button.
export default function ProductDetailPage() {
  const { productId } = useParams();
  return <h1>Product {productId}</h1>;
}
