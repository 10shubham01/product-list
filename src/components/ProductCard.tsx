import { type Product } from "../api/products.api";
import { memo } from "react";

type Props = {
  product: Product;
};

export const ProductCard = memo(({ product }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 h-32 w-full rounded bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {product.title}
      </h3>
      <p className="mb-2 text-sm text-gray-600">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">
          ₹{product.price}
        </span>
        <span className="text-sm text-gray-500">Rating: {product.rating}</span>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Category: {product.category} | Stock: {product.stock}
      </div>
    </div>
  );
});

export function ProductSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-5"
        >
          <div className="mb-3 h-32 w-full rounded bg-gray-200" />
          <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
          <div className="mt-3 flex justify-between">
            <div className="h-5 w-16 rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </>
  );
}
