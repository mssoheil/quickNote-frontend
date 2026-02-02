import type { UseMutationOptions } from "@tanstack/react-query";

export type MutationQueryOptions<T> = UseMutationOptions<unknown, Error, T>;
