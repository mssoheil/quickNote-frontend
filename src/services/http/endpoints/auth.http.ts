import { HttpService } from "@/services/http";

class AuthHttpService extends HttpService {
  constructor() {
    super({ suffix: "auth" });
  }

  register() {
    return this.httpService.post("register");
  }
}

const AuthService = new AuthHttpService();

export default AuthService;
