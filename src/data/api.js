const BASE = "https://dummyjson.com";

async function http(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function mapProduct(p) {
  return {
    id: String(p.id),
    title: p.title,
    price: p.price,
    category: p.category,
    stock: p.stock ?? 10,
    description: p.description,
    image: Array.isArray(p.images) && p.images.length ? p.images[0] : p.thumbnail,
  };
}

export async function fetchProducts(categoryId) {
  if (categoryId) {
    const data = await http(`/products/category/${encodeURIComponent(categoryId)}?limit=12`);
    return (data.products ?? []).map(mapProduct);
  }
  const data = await http(`/products?limit=12`);
  return (data.products ?? []).map(mapProduct);
}

export async function fetchProductById(id) {
  const data = await http(`/products/${encodeURIComponent(id)}`);
  return mapProduct(data);
}

export async function fetchCategories() {
  const data = await http(`/products/categories`);
  return data.map(c => (typeof c === "string" ? c : c.slug || c.name)).filter(Boolean);
}
