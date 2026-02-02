import { queryOptions, useQuery } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type { GetNotesRequestDto } from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useGetNotesQuery = (payload: GetNotesRequestDto) =>
  useQuery({
    queryKey: [NOTE_QUERY_KEY, payload.page],
    queryFn: async (): {
      list: Note[];
      page: number;
      limit: number;
      hasMore: boolean;
      total: number;
    } => {
      const response = await NoteService.getNotes(payload);
      return response?.data?.payload;
    },
  });
