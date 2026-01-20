interface EmptyStateProps {
  title: string;
  message: string;
  className?: string;
}

export function EmptyState({ title, message, className }: EmptyStateProps) {
  return (
    <div
      className={`mx-auto max-w-3xl p-6 flex items-center justify-center h-dvh ${className || ""}`}
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">{title}</h2>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
}
