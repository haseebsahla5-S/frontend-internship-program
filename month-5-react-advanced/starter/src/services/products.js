const API = 'https://fakestoreapi.com';

async function getJson(path) {
  const response = await fetch(`${API}${path}`);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}

export function fetchProducts() {
  return getJson('/products');
}

export function fetchProduct(id) {
  return getJson(`/products/${id}`);
}
