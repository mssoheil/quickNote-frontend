import { getMeQuery } from "@/features/auth/get-me.query";
import { queryClient } from "@/providers/query.provider";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: async () => {
    try {
      const me = await queryClient.ensureQueryData(getMeQuery());
      if (!me) throw new Error("unauth");
    } catch {
      throw redirect({ to: "/auth/login" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Dashboard page</div>;
}
