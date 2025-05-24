import { createFileRoute } from "@tanstack/react-router";
// Local components
import { LoginForm } from "@/routes/auth/login/-form";
import { AuthHeader } from "@/routes/auth/components/-header";
import { AuthContainer } from "@/routes/auth/components/-container";
import { AuthLinkSection } from "@/routes/auth/components/-link-section";

export const Route = createFileRoute("/auth/login/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthContainer>
			<AuthHeader />

			<div className="mt-4">
				<LoginForm />
				<AuthLinkSection />
			</div>
		</AuthContainer>
	);
}
