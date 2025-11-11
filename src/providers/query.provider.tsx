import type { ReactNode } from "react";
// Configs
import { envLoader } from "@/config/env-loader.config";
// Utils
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from "@tanstack/react-query";

const queryOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 60_000,
      gcTime: 5 * 60_000,
      refetchOnMount: false,
    },
    mutations: { retry: 0 },
  },
};

const queryClient = new QueryClient(queryOptions);

const Devtools =
  envLoader.ENV === "development"
    ? await import("@tanstack/react-query-devtools").then(
        (m) => m.ReactQueryDevtools
      )
    : null;

interface Props {
  children: ReactNode;
}

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {envLoader.ENV === "development" && Devtools ? (
        <Devtools initialIsOpen={false} />
      ) : null}
    </QueryClientProvider>
  );
};
