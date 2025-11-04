// Utilities
import axios from "axios";
// Configs
import { envLoader } from "@/config/env-loader.config";
// Types
import type { AxiosError, AxiosInstance } from "axios";

interface HttpConfig {
  suffix?: string;
}

export abstract class HttpService {
  protected httpService: AxiosInstance;

  protected constructor({ suffix }: HttpConfig) {
    const baseURL =
      envLoader.ENV === "development"
        ? window.location.origin
        : envLoader.BASE_URL;

    this.httpService = axios.create({
      baseURL: `${baseURL}/api${suffix ? `/${suffix}` : ""}`,
      timeout: envLoader.TIMEOUT_MS,
      validateStatus(status) {
        return status >= 200 && status < 300;
      },
      withCredentials: true,
    });

    this.responseInterceptor();
  }

  private responseInterceptor() {
    this.httpService.interceptors.response.use(
      (response) => response,
      (error: AxiosError<any>) => {
        if (error?.response?.status === 401) {
          window.location.href = "/auth";
        }
        return Promise.reject(error);
      }
    );
  }
}
