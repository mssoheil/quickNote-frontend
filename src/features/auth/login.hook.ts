// Services
import AuthService from "@/services/http/endpoints/auth.http";
// Hooks
import { useMutation } from "@tanstack/react-query";
// Common components
import { toastMessage } from "@/components/ui/toast";
// Types
import type { LoginUserRequestDto } from "@/features/auth/types";

export const useLoginMutation = (
  options: MutationQueryOptions<LoginUserRequestDto>,
) => {
  return useMutation({
    mutationFn: async (payload: LoginUserRequestDto) =>
      await AuthService.login(payload),
    onSuccess: (response) => {
      const responseMessage = response?.data?.message;

      if (responseMessage) {
        toastMessage.success(responseMessage);
        options.onSuccess(response);
      }
    },
  });
};
