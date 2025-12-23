// Services
import AuthService from "@/services/http/endpoints/auth.http";
// Hooks
import { useMutation } from "@tanstack/react-query";
// Common components
import { toastMessage } from "@/components/ui/toast";
// Types
import type { RegisterUserRequestDto } from "@/features/auth/types";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (payload: RegisterUserRequestDto) =>
      await AuthService.register(payload),
    onSuccess: (response) => {
      const responseMessage = response?.data?.message;

      if (responseMessage) {
        toastMessage.success(responseMessage);
      }
    },
  });
};
