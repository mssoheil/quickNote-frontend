// UI components
import { Textarea } from "@/components/ui/textarea";
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
// Types
import type { Control, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  formControl: Control<T, any, T>;
  rows?: number;
  className?: string;
};

export const TextAreaFormField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  formControl,
  rows = 4,
  className,
}: Props<T>) => (
  <FormField
    control={formControl}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={placeholder}
            rows={rows}
            className={className}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default TextAreaFormField;
