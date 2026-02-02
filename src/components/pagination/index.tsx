import { useEffect, useMemo, useState } from "react";
// Shared components
import Modal from "@/components/ui/modal";
import { Loading } from "@/components/ui/loading";
// Local components
import { Note } from "@/routes/dashboard/components/note";
import { AddNoteForm } from "@/routes/dashboard/components/add-note-form";
// Hooks
import { useGetNotesQuery } from "@/features/note/get-notes.query";
// Utils
import { getTotalPage } from "@/lib/utils";

type PaginationProps = {
  page: number;
  total?: number;
  hasMore: boolean;
  pageSize: number;
  setPage: (next: number) => void;
};

export default function Pagination({
  page,
  total,
  hasMore,
  pageSize,
  currentCount,
  setPage,
}: PaginationProps) {
  const totalPages = getTotalPage(total, pageSize);

  const hasPrevious = page > 1;

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="text-sm opacity-70">
        Page {page}
        {totalPages > 0 ? ` / ${totalPages}` : ""}
      </div>

      <div className="flex items-center gap-2">
        <button
          className="h-10 rounded border px-3 disabled:opacity-50"
          onClick={() => hasPrevious && setPage(page - 1)}
          disabled={!hasPrevious}
        >
          Prev
        </button>

        <button
          className="h-10 rounded border px-3 disabled:opacity-50"
          onClick={() => hasMore && setPage(page + 1)}
          disabled={!hasMore}
        >
          Next
        </button>
      </div>
    </div>
  );
}
