type Props = {
  disablePrev: boolean;
  disableNext: boolean;
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export function Pagination({
  disablePrev,
  disableNext,
  page,
  totalPages,
  onPrev,
  onNext,
  className,
}: Props) {
  return (
    <div
      className={`mt-6 flex items-center justify-center gap-2 ${className} flex-wrap`}
    >
      <button
        onClick={onPrev}
        disabled={disablePrev}
        className="rounded-lg border px-3 py-2 text-sm disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>

      <span className="px-3 py-2 text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={disableNext}
        className="rounded-lg border px-3 py-2 text-sm disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
