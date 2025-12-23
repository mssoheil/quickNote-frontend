// UI components
import { Form } from "@/components/ui/form";
// Shared components
import { SubmitButton, InputFormField } from "@/components";
// Utils
import { z, type ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Hooks
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/features/auth/hooks";

const FormSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email should not be empty")
      .email("Invalid email address"),
    password: z.string().min(8, "Password should be at least 8 character"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password should be at least 8 character"),
  })
  .refine((data: FormValues) => data.password === data.confirmPassword, {
    message: "Password and confirm password do not match",
    path: ["confirmPassword"],
  });

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const registerMutation = useRegisterMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema as ZodType<FormValues>),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    registerMutation.mutate({
      email: values.email,
      password: values.password,
    });
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
        <InputFormField<typeof form.control>
          type="password"
          name="confirmPassword"
          label="Confirm password"
          placeholder="Enter password again"
        />

        <SubmitButton>Sign up</SubmitButton>
      </form>
    </Form>
  );
};
