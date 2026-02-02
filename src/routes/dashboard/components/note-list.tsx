import { useState } from "react";
// Common components
import Modal from "@/components/ui/modal";
import Pagination from "@/components/pagination";
import { Loading } from "@/components/ui/loading";
// Types
import type { Note as TNote } from "@/features/note/types";
// Shared components
import { Logout } from "@/routes/auth/components/logout";
import { Note } from "@/routes/dashboard/components/note";
import { RemoveNote } from "@/routes/dashboard/components/remove-note";
import EditNoteForm from "@/routes/dashboard/components/edit-note-form";
import { AddNoteForm } from "@/routes/dashboard/components/add-note-form";
// Hooks
import { useNavigate } from "@tanstack/react-router";
import { useGetNotesQuery } from "@/features/note/get-notes.query";
import { useUpdateNoteQuery } from "@/features/note/update-note.query";

export function NoteList() {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [noteToBeRemoved, setNoteToBeRemoved] = useState(null);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  const [isRemoveModalOpened, setIsRemoveModalOpened] = useState(false);
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useState(false);
  const [currentNote, setCurrentNote] = useState<TNote | null>(null);

  const navigate = useNavigate();

  const pageSize = 10;

  const { data, isLoading, isError, refetch } = useGetNotesQuery({
    page,
    limit: pageSize,
  });

  const updateNoteMutation = useUpdateNoteQuery({
    onSuccess: () => {
      onSuccessUpdate();
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const list = data?.list ?? [];
  const total = data?.total ?? 0;

  function onViewNote(note: TNote) {
    setCurrentNote(note);
    setIsOpen(true);
  }

  function onSuccessUpdate() {
    setCurrentNote(null);
    setIsOpen(false);
  }

  function handleOpenRemoveModal(note: TNote) {
    setNoteToBeRemoved(note.id);
    setIsRemoveModalOpened(true);
  }

  function handleLogout(note: TNote) {
    setIsLogoutModalOpened(true);
  }

  function handleCancelLogout() {
    setIsLogoutModalOpened(false);
  }

  function handleSubmitLogout() {
    handleCancelLogout();
  }

  function handleCancelRemove() {
    setNoteToBeRemoved(null);
    setIsRemoveModalOpened(false);
  }

  function handleUpdate(note: TNote) {
    console.log("🚀 ~ handleUpdate ~ note:", note);
    console.log("🚀 ~ handleUpdate ~ currentNote:", currentNote);
    updateNoteMutation.mutate({ id: currentNote.id, ...note });
  }

  if (isOpen && currentNote) {
    return (
      <EditNoteForm
        initial={currentNote}
        isSaving={false}
        onCancel={() => setIsOpen(false)}
        onSave={handleUpdate}
      />
    );
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <div className="border-b bg-white p-4 flex justify-between gap-4">
        <button
          className="h-10 rounded bg-blue-500 px-4 text-base font-semibold text-white sm:text-lg"
          onClick={() => setIsAddModalOpened(true)}
        >
          Add Note
        </button>
        <button
          className="h-10 rounded bg-red-500 px-4 text-base font-semibold text-white sm:text-lg"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
        {!list.length ? (
          <div>There are no existing note</div>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {list.map((note) => (
              <Note
                key={note.id}
                item={note}
                onClick={onViewNote}
                onDelete={() => handleOpenRemoveModal(note)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t bg-white p-4">
        <Pagination
          page={page}
          setPage={setPage}
          total={total}
          pageSize={pageSize}
          currentCount={list.length}
          hasMore={data?.hasMore}
        />
      </div>

      <Modal
        open={isAddModalOpened}
        title="Add new Note"
        onClose={() => setIsAddModalOpened(false)}
      >
        <AddNoteForm
          onOk={() => {
            setIsAddModalOpened(false);
            refetch();
          }}
        />
      </Modal>
      <Modal
        open={isRemoveModalOpened}
        title="Remove Note"
        onClose={handleCancelRemove}
      >
        <RemoveNote id={noteToBeRemoved} onCancel={handleCancelRemove} />
      </Modal>
      <Modal
        open={isLogoutModalOpened}
        title="Log Out"
        onClose={handleCancelLogout}
      >
        <Logout onCancel={handleCancelLogout} onOk={handleSubmitLogout} />
      </Modal>
    </div>
  );
}
