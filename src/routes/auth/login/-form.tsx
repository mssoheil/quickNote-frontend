// UI components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
// Utils
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Hooks
import { useForm } from "react-hook-form";

const FormSchema = z.object({
	email: z
		.string()
		.min(1, "Email should not be empty")
		.email("Invalid email address"),
	password: z.string().min(8, "Password should be at least 8 character"),
});

type FormValues = z.infer<typeof FormSchema>;

export const LoginForm = () => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xl text-gray-700 font-semibold">
								Email
							</FormLabel>
							<FormControl>
								<Input placeholder="Enter Email" className="h-10" {...field} />
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
							<FormLabel className="text-xl text-gray-700 font-semibold">
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
				<Button type="submit" className="bg-blue-500 w-full text-xl h-10 mt-4">
					Log in
				</Button>
			</form>
		</Form>
	);
};
