import * as React from "react";
import { cn } from "@/lib/utils";
// Types
import type { Note } from "@/features/note/types";

type Props = {
  initial?: Partial<Note>;
  onSave: (draft: Note) => void | Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
  maxContentLength?: number;
  className?: string;
};

export function EditNote({
  initial,
  onSave,
  onCancel,
  isSaving = false,
  maxContentLength = 10_000,
  className,
}: Props) {
  const [title, setTitle] = React.useState(initial?.title ?? "");
  const [content, setContent] = React.useState(initial?.content ?? "");
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    setTitle(initial?.title ?? "");
    setContent(initial?.content ?? "");
    setTouched(false);
  }, [initial?.title, initial?.content]);

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();

  const isDirty =
    trimmedTitle !== (initial?.title ?? "").trim() ||
    trimmedContent !== (initial?.content ?? "").trim();

  const contentOver = content.length > maxContentLength;

  const canSave =
    !isSaving &&
    (trimmedTitle.length > 0 || trimmedContent.length > 0) &&
    !contentOver;

  const handleSave = async () => {
    setTouched(true);
    if (!canSave) return;
    await onSave({ title: trimmedTitle, content: trimmedContent });
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-white",
        "sm:inset-auto sm:relative sm:mx-auto sm:my-8 sm:h-[calc(100vh-4rem)] sm:w-full sm:max-w-2xl sm:overflow-hidden sm:rounded-2xl sm:border sm:shadow-sm",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="border-b px-4 py-3 sm:px-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Title"
            className={cn(
              "w-full bg-transparent text-xl font-semibold text-zinc-900 outline-none placeholder:text-zinc-400",
            )}
          />

          <div className="mt-2 flex items-center justify-between text-xs">
            <div className="text-zinc-500">
              {touched &&
              trimmedTitle.length === 0 &&
              trimmedContent.length === 0
                ? "Write something to save."
                : " "}
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 px-4 py-3 sm:px-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Start writing…"
            className={cn(
              "h-full w-full resize-none bg-transparent text-sm leading-6 text-zinc-800 outline-none placeholder:text-zinc-400",
              contentOver && "text-red-600 placeholder:text-red-300",
            )}
          />

          <div className="mt-2 flex items-center justify-between text-xs">
            <div className="text-zinc-500">
              {contentOver ? "Content is too long." : " "}
            </div>
            <div className={cn("text-zinc-400", contentOver && "text-red-600")}>
              {content.length}/{maxContentLength}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!canSave}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-semibold text-white",
              canSave ? "bg-zinc-900 hover:bg-zinc-800" : "bg-zinc-300",
            )}
          >
            {isSaving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
