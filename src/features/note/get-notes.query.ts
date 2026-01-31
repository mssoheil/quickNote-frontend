import { queryOptions } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type { GetNotesRequestDto } from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useGetNotesQuery = () =>
  queryOptions({
    queryKey: [NOTE_QUERY_KEY],
    queryFn: async (payload: GetNotesRequestDto) => {
      const response = await NoteService.getNotes(payload);
      return response;
    },
  });
