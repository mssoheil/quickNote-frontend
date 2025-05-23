import { createFileRoute } from "@tanstack/react-router";
// Shared components
import { Logo } from "@/components";
// UI components
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
// Utils
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Hooks
import { useForm } from "react-hook-form";
import {
	Form,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/auth/login/")({
	component: RouteComponent,
});

const FormSchema = z.object({
	email: z
		.string()
		.min(1, "Email should not be empty")
		.email("Invalid email address"),
	password: z.string().min(8, "Password should be at least 8 character"),
});

type FormValues = z.infer<typeof FormSchema>;

function RouteComponent() {
	const form = useForm<FormValues>({
		resolver: zodResolver(FormSchema),
		mode: "onSubmit",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof FormSchema>) {
		console.log(values);
	}

	return (
		<div className="h-screen lg:h-1/2 p-4">
			<Logo />
			<h1 className="font-bold text-4xl text-gray-700 mt-8">Log in</h1>

			<div className="mt-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xl text-gray-700">Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter Email"
											className="h-10"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xl text-gray-700">
										Password
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter Password"
											className="h-10"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="bg-blue-500 w-full text-xl h-10 mt-4"
						>
							Log in
						</Button>
					</form>
				</Form>
				<div className="mt-4 text-gray-600 tex-xl">
					Don't have an account?
					<Link
						to="/auth/register"
						className="text-blue-500 font-semibold ml-2"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
}
