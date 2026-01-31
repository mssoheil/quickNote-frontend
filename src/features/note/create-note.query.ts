import { useMutation } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Services
import NoteService from "@/services/http/endpoints/note.http";
// Types
import type { CreateNoteRequestDto } from "@/features/note/types";

export const useCreateNoteQuery = () =>
  useMutation({
    queryFn: async (payload: CreateNoteRequestDto) => {
      const response = await NoteService.createNote(payload);
      return response;
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: [NOTE_QUERY_KEY],
      });
      options?.onSuccess?.(...args);
    },
  });
