import type { MouseEventHandler, ReactNode } from "react";

interface Props {
  item: Note;
  onDelete: (note: Note) => void;
  onClick: (note: Note) => void;
}

export function Note({ item, onView, onDelete, onClick }: Props) {
  function handleDelete(e: MouseEventHandler<HTMLButtonElement>) {
    e.stopPropagation();
    onDelete(item);
  }

  return (
    <div
      className="rounded-lg border p-4 transition hover:shadow-sm"
      onClick={() => onClick(item)}
    >
      <h3 className="mb-2 font-semibold">{item.title}</h3>

      <p className="mb-4 text-sm text-gray-700">
        {item.content.slice(0, 100)}
        {item.content.length > 100 && "…"}
      </p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          <span className="mr-1">Last update</span>
          <span>{new Date(item.createdAt).toDateString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDelete}
            className="rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
