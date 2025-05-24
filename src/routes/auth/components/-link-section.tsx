import { Link } from "@tanstack/react-router";

export const AuthLinkSection = ({ isLogin = true }) => {
	return (
		<div className="mt-4 text-gray-600 tex-xl md:text-center">
			{isLogin ? "Don't have an account?" : "Already have an account?"}

			<Link
				to={isLogin ? "/auth/register" : "/auth/login"}
				className="text-blue-500 font-semibold ml-2"
			>
				{isLogin ? "Sign up" : "Log in"}
			</Link>
		</div>
	);
};
