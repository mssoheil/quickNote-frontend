interface Props {
  hasRetry?: boolean;
  onRetry?: () => void;
}

export const Error = ({ hasRetry, onRetry }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-red-200">
        <div className="text-lg font-semibold text-gray-900">Error</div>
        <p className="mt-2 text-sm text-gray-600">The error occurred</p>
        {hasRetry ? (
          <button
            onClick={() => onRetry?.()}
            className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2.5 text-white font-medium hover:bg-red-700"
          >
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
};
