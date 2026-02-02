import { useMutation, useQueryClient } from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type {
  ParamRequestDto,
  UpdateNoteRequestDto,
} from "@/features/note/types";
// Services
import NoteService from "@/services/http/endpoints/note.http";

export const useUpdateNoteQuery = (
  options?: UseMutationOptions<unknown, Error, UpdateNoteRequestDto>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateNoteRequestDto & ParamRequestDto) => {
      console.log("🚀 ~ useUpdateNoteQuery ~ payload:", payload);
      const response = await NoteService.updateNote(payload);
      return response;
    },
    onSuccess: (data, variables, context) => {
      console.log("🚀 ~ useUpdateNoteQuery ~ data:", data);
      queryClient.invalidateQueries({ queryKey: [NOTE_QUERY_KEY] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      console.log("🚀 ~ useUpdateNoteQuery ~ error:", error);
      options?.onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      console.log("🚀 ~ useUpdateNoteQuery ~ data:", data);
      options?.onSettled?.(data, error, variables, context);
    },
  });
};
