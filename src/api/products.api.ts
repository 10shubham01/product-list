const BASE_URL = 'https://dummyjson.com';

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function fetchProducts(page: number, limit = 30): Promise<ProductsResponse> {
  const skip = (page - 1) * limit;
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
}
