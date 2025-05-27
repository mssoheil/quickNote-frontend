import { createFileRoute } from "@tanstack/react-router";
// Local components
import { RegisterForm } from "@/routes/auth/register/-form";
import { AuthHeader } from "@/routes/auth/components/-header";
import { AuthContainer } from "@/routes/auth/components/-container";
import { AuthLinkSection } from "@/routes/auth/components/-link-section";

export const Route = createFileRoute("/auth/register/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthContainer>
			<AuthHeader isLogin={false} />

			<div className="mt-4">
				<RegisterForm />
				<AuthLinkSection isLogin={false} />
			</div>
		</AuthContainer>
	);
}
