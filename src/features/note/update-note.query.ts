import { useMutation } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type {
  ParamRequestDto,
  UpdateNoteRequestDto,
} from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useUpdateNoteQuery = () =>
  useMutation({
    queryFn: async (param: ParamRequestDto, payload: UpdateNoteRequestDto) => {
      const response = await NoteService.updateNote(payload);
      return response;
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: [NOTE_QUERY_KEY],
      });
      options?.onSuccess?.(...args);
    },
  });
