import { HttpService } from "@/services/http";
// Types
import type {
  GetMeResponseDto,
  LoginUserRequestDto,
  RegisterUserRequestDto,
} from "@/features/auth/types";

class AuthHttpService extends HttpService {
  constructor() {
    super({ suffix: "auth" });
  }

  register(payload: RegisterUserRequestDto) {
    return this.httpService.post("/register", payload);
  }

  login(payload: LoginUserRequestDto) {
    return this.httpService.post("/login", payload);
  }

  getMe(): Promise<GetMeResponseDto> {
    return this.httpService.get("/me");
  }

  logout(): Promise {
    return this.httpService.post("/logout");
  }
}

const AuthService = new AuthHttpService();

export default AuthService;
