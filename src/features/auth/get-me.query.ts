import { GET_ME_QUERY_KEY } from "@/features/auth/query-key";
import AuthService from "@/services/http/endpoints/auth.http";
import { queryOptions } from "@tanstack/react-query";

export const getMeQuery = () =>
  queryOptions({
    queryKey: [GET_ME_QUERY_KEY],
    queryFn: async () => {
      const response = await AuthService.getMe();
      return response;
    },
  });
