import type { RegisterUserRequestDto } from "@/features/auth/types";
import AuthService from "@/services/http/endpoints/auth.http";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterUserRequestDto) =>
      AuthService.register(payload),
  });
};
