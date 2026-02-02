import { useRemoveNoteMutation } from "@/features/note/remove-note.query";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  onCancel: () => void;
}

export const RemoveNote = ({ onCancel, id }: Props) => {
  const removeNoteMutation = useRemoveNoteMutation({
    onSuccess: onCancel,
  });

  function onSubmit() {
    removeNoteMutation.mutate({ id });
  }

  return (
    <div>
      <p className="font-semibold mb-24">
        Are you sure to remove the selected note?
      </p>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={removeNoteMutation?.isPending}
          className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={removeNoteMutation?.isPending}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-semibold text-white",
            !removeNoteMutation?.isPending
              ? "bg-zinc-900 hover:bg-zinc-800"
              : "bg-zinc-300",
          )}
        >
          {removeNoteMutation?.isPending ? "isProcessing" : "Confirm"}
        </button>
      </div>
    </div>
  );
};
