import type { RegisterUserRequestDto } from "@/features/auth/types";
import AuthService from "@/services/http/endpoints/auth.http";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (payload: RegisterUserRequestDto) =>
      await AuthService.register(payload),
  });
};
