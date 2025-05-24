import type { PropsWithChildren } from "react";
// Shared components
import { Logo } from "@/components";

export const AuthContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className="h-screen md:flex md:items-center">
			<div className="md:h-[600px] p-4 md:py-12 md:rounded-2xl md:shadow-xl px-6 md:w-[460px] md:mx-auto md:bg-white md:align-vertical">
				<Logo className="md:justify-center" />
				<div className="md:border md:rounded-2xl md:mt-6 md:pt-4 md:pb-8 md:px-4">
					{children}
				</div>
			</div>
		</div>
	);
};
