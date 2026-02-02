import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="
          relative z-10 w-full
          sm:max-w-lg
          rounded-t-2xl sm:rounded-2xl
          bg-white
          shadow-xl
          animate-in fade-in zoom-in-95
        "
      >
        {title || onClose ? (
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        ) : null}

        <div className="max-h-[75vh] overflow-y-auto px-4 py-4 sm:px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
