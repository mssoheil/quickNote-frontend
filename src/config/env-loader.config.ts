import { get } from "env-var";
import { config } from "dotenv";
// Types
import type { EnvLoader } from "@/types/env-loader.type";

config();

const BASE_URL = get("BASE_URL").required().asString();
const ENV = get("ENV").required().asString();
const TIMEOUT_MS = get("TIMEOUT_MS").required().asInt();

export const envLoader: EnvLoader = {
  ENV,
  BASE_URL,
  TIMEOUT_MS,
};
