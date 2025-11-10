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

export const QueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
