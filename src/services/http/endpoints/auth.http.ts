import { HttpService } from "@/services/http";
// Types
import type { RegisterUserRequestDto } from "@/features/auth/types";

class AuthHttpService extends HttpService {
  constructor() {
    super({ suffix: "auth" });
  }

  register(payload: RegisterUserRequestDto) {
    return this.httpService.post("register", payload);
  }
}

const AuthService = new AuthHttpService();

export default AuthService;
