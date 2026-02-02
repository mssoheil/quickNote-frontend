// Hooks
import { useLogoutMutation } from "@/features/auth/logout.query";
import { useRemoveNoteMutation } from "@/features/note/remove-note.query";
// Utils
import { cn } from "@/lib/utils";

interface Props {
  onOk: () => void;
  onCancel: () => void;
}

export const Logout = ({ onCancel, onOk }: Props) => {
  const logoutMutation = useLogoutMutation({
    onSuccess: onOk,
  });

  function onSubmit() {
    console.log("fun");
    logoutMutation.mutate();
  }

  return (
    <div>
      <p className="font-semibold mb-24">Are you sure to Logout?</p>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={logoutMutation?.isPending}
          className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={logoutMutation?.isPending}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-semibold text-white",
            !logoutMutation?.isPending
              ? "bg-zinc-900 hover:bg-zinc-800"
              : "bg-zinc-300",
          )}
        >
          {logoutMutation?.isPending ? "isProcessing" : "Confirm"}
        </button>
      </div>
    </div>
  );
};
