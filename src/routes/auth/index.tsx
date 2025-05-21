import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
	loader: async () => {
		redirect({
			to: "/auth/login/",
			throw: true,
		});
	},
});
