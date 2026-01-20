import { useQuery, type UseQueryOptions } from 'react-query';
import { fetchProducts, type ProductsResponse } from '../api/products.api';

export const defaultQueryOptions = {
  staleTime: 60_000,
  cacheTime: 1000 * 60 * 30,
  refetchOnWindowFocus: false,
};

export function useProducts(
  page: number,
  limit = 30,
  options?: Partial<UseQueryOptions<ProductsResponse, Error>>
) {
  return useQuery<ProductsResponse, Error>({
    queryKey: ['products', page, limit],
    queryFn: () => fetchProducts(page, limit),
    ...defaultQueryOptions,
    ...options,
  });
}
