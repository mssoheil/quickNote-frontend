import type { Note } from "@/features/note/types";
// UI components
import { Form } from "@/components/ui/form";
// Shared components
import { SubmitButton, InputFormField, TextAreaFormField } from "@/components";
// Utils
import { z, type ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Hooks
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { useLoginMutation } from "@/features/auth/login.hook";
import { useCreateNoteMutation } from "@/features/note/create-note.query";

interface Props {
  isEdit?: boolean;
  note?: Note;
  onOk: () => void;
}

const FormSchema = z.object({
  title: z.string(),
  content: z.string(),
});

type FormValues = {
  title: string;
  content: string;
};

export const AddNoteForm = ({ isEdit, note, onOk }: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema as ZodType<FormValues>),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const createNoteMutation = useCreateNoteMutation({
    onSuccess: onOk,
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    createNoteMutation.mutate({
      title: values.title,
      content: values.content,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputFormField<typeof form.control>
          name="title"
          label="Title"
          placeholder="Enter Title"
        />
        <TextAreaFormField<typeof form.control>
          name="content"
          label="Content"
          type="content"
          placeholder="Enter Content"
        />

        <SubmitButton>Submit</SubmitButton>
      </form>
    </Form>
  );
};
