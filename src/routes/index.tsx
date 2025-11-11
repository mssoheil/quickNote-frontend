import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      redirect({
        to: "/auth/login",
        throw: true,
      });
    } else {
      redirect({
        to: "/dashboard",
        throw: true,
      });
    }
  },
});
