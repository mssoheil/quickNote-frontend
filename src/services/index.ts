// Utilities
import axios from "axios";
// Configs
import { envLoader } from "@/config/env-loader.config";
// Types
import type { AxiosInstance } from "axios";

export abstract class HttpService {
  protected httpService: AxiosInstance;

  protected constructor() {
    const baseURL =
      envLoader.ENV === "development"
        ? window.location.origin
        : envLoader.BASE_URL;

    this.httpService = axios.create({
      baseURL: `${baseURL}/api`,
      timeout: envLoader.TIMEOUT_MS,
      validateStatus(status) {
        return status >= 200 && status < 300;
      },
    });
  }
}
