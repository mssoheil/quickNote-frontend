import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from "@tanstack/react-query";
// Constants
import { NOTE_QUERY_KEY } from "@/features/note/query-key";
// Types
import type { ParamRequestDto } from "@/features/note/types";
// Services
import AuthService from "@/services/http/endpoints/auth.http";

export const useLogoutMutation = (
  options?: UseMutationOptions<unknown, Error, ParamRequestDto>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await AuthService.logout(),
    onSuccess: (data, variables, context) => {
      queryClient.clear();
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
