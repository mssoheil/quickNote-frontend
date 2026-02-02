import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
import NoteService from "@/services/http/endpoints/note.http";
import type { CreateNoteRequestDto } from "@/features/note/types";

export const useCreateNoteMutation = (
  options?: UseMutationOptions<unknown, Error, CreateNoteRequestDto>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await NoteService.createNote(payload);
      return response;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: [NOTE_QUERY_KEY] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      options?.onSettled?.(data, error, variables, context);
    },
  });
};
