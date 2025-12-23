import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async () => {
    const token = localStorage.getItem("token");

    redirect({
      to: !token ? "/auth/login" : "/dashboard",
      throw: true,
    });
  },
});
