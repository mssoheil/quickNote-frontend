export const AuthHeader = ({ isLogin = true }) => {
	return (
		<h1 className="font-bold text-4xl text-gray-700 mt-8 md:text-center md:mt-4">
			{isLogin ? "Log in" : "Sign up"}
		</h1>
	);
};
