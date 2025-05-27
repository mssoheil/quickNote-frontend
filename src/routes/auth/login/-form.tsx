// UI components
import { Form } from "@/components/ui/form";
// Shared components
import { SubmitButton, InputFormField } from "@/components";
// Utils
import { z, type ZodType } from "zod";
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

type FormValues = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(FormSchema as ZodType<FormValues>),
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
				<InputFormField<typeof form.control>
					name="email"
					label="Email"
					placeholder="Enter Email"
				/>
				<InputFormField<typeof form.control>
					name="password"
					label="Password"
					type="password"
					placeholder="Enter Password"
				/>

				<SubmitButton>Log in</SubmitButton>
			</form>
		</Form>
	);
};
