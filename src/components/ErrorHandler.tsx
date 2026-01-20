type ErrorHandlerProps = {
  error: Error;
  refetch?: () => void;
};

export function ErrorHandler({ error, refetch }: ErrorHandlerProps) {
  return (
    <div className="mx-auto max-w-3xl p-6 flex items-center justify-center h-dvh">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Error Loading Products
        </h2>
        <p className="text-gray-600">{error.message}</p>
        {refetch && (
          <button
            onClick={() => refetch()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
