import { useMutation, useQueryClient } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type { ParamRequestDto } from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useRemoveNoteMutation = (
  options?: UseMutationOptions<unknown, Error, ParamRequestDto>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (param: ParamRequestDto) => {
      const response = await NoteService.removeNote(param);
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
