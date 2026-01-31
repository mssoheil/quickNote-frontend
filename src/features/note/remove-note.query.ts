import { useMutation } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type { ParamRequestDto } from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useRemoveNoteQuery = () =>
  useMutation({
    queryFn: async (param: ParamRequestDto) => {
      const response = await NoteService.removeNote(param);
      return response;
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: [NOTE_QUERY_KEY],
      });
      options?.onSuccess?.(...args);
    },
  });
