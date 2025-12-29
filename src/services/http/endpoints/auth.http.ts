import { HttpService } from "@/services/http";
// Types
import type {
  GetMeResponseDto,
  RegisterUserRequestDto,
} from "@/features/auth/types";

class AuthHttpService extends HttpService {
  constructor() {
    super({ suffix: "auth" });
  }

  register(payload: RegisterUserRequestDto) {
    return this.httpService.post("/register", payload);
  }

  getMe(): Promise<GetMeResponseDto> {
    return this.httpService.get("/me");
  }
}

const AuthService = new AuthHttpService();

export default AuthService;
