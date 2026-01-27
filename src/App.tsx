import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { useProducts, defaultQueryOptions } from "./hooks/useProducts";
import { ProductCard, ProductSkeleton } from "./components/ProductCard";
import { Pagination } from "./components/Pagination";
import { ErrorHandler } from "./components/ErrorHandler";
import { EmptyState } from "./components/EmptyState";
import { useQueryClient } from "react-query";
import { fetchProducts } from "./api/products.api";
const [state, setState] = useState();

import { debounce } from "../utils/index";

export function App() {
  const LIMIT = 30;
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, error, refetch, isFetching } = useProducts(
    page,
    LIMIT,
    defaultQueryOptions,
  );

  const totalPages = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.total / LIMIT);
  }, [data, LIMIT]);

  const handleNext = useCallback(() => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
    }
  }, [page, totalPages]);

  const handlePrev = useCallback(() => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      setPage(prevPage);
    }
  }, [page]);

  useEffect(() => {
    if (page < totalPages) {
      queryClient.prefetchQuery(
        ["products", page + 1, LIMIT],
        () => fetchProducts(page + 1, LIMIT),
        defaultQueryOptions,
      );
    }
  }, [page, totalPages, LIMIT, queryClient]);

  const handleSearch = function handleSearch(e) {
    console.log(e?.target?.value);
    setSearchValue(e?.target?.value);
  };

  const debouncedFun = debounce(handleSearch, 300);
  const filterData = data?.products.filter((e) =>
    e.title.toLowerCase().includes(searchValue),
  );

  if (error) {
    return <ErrorHandler error={error} refetch={refetch} />;
  }

  if (!isLoading && data?.products.length === 0) {
    return (
      <EmptyState
        title="No Products Found"
        message="Try refreshing or check back later."
      />
    );
  }

  return (
    <>
      <div className="mx-auto max-w-4xl p-6 relative h-dvh flex flex-col justify-between">
        <h1 className="mb-6 text-2xl font-bold">Products</h1>
        <input
          type="text"
          className="ring ring-red-500 p-3 my-2"
          placeholder="search for prroducts"
          onChange={debouncedFun}
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full overflow-y-auto">
          {isLoading ? (
            <ProductSkeleton count={LIMIT} />
          ) : (
            filterData?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        <Pagination
          page={page}
          totalPages={totalPages}
          disablePrev={page === 1}
          disableNext={page === totalPages || isFetching}
          className="bg-white py-4 w-full left-0 border-t border-gray-200"
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </>
  );
}
