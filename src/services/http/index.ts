// Utilities
import axios from "axios";
import { toastMessage } from "@/components/ui/toast";
// Configs
import { envLoader } from "@/config/env-loader.config";
// Types
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

interface HttpConfig {
  suffix?: string;
}

const AUTH_PATHS = ["/api/auth/login", "/api/auth/register"];

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
    this.requestInterceptor();
  }

  private requestInterceptor() {
    this.httpService.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const url = new URL(config.url ?? "", config.baseURL);
        const path = url.pathname;

        const isAuth = AUTH_PATHS.some((p) => path.startsWith(p));
        config.withCredentials = !isAuth;

        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  private responseInterceptor() {
    this.httpService.interceptors.response.use(
      (response) => response,
      (error: AxiosError<any>) => {
        if (error?.response?.status === 401) {
          window.location.href = "/auth";
        }

        const errorMessage = error?.response?.data?.message;

        if (errorMessage) {
          toastMessage.error(errorMessage);
        }

        return Promise.reject(error);
      }
    );
  }
}
