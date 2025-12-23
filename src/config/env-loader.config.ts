import type { EnvLoader } from "@/types/env-loader.type";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;
const ENV = import.meta.env.VITE_ENV as string;
const TIMEOUT_MS = Number(import.meta.env.VITE_TIMEOUT_MS ?? 0);

export const envLoader: EnvLoader = {
  ENV,
  BASE_URL,
  TIMEOUT_MS,
};
