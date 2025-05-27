// UI components
import { Input } from "@/components/ui/input";
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
	type?: string;
	placeholder: string;
	formControl: Control<T, any, T>;
};

export const InputFormField = <T extends FieldValues>({
	name,
	label,
	type = "text",
	placeholder,
	formControl,
}: Props<T>) => (
	<FormField
		control={formControl}
		name={name}
		render={({ field }) => (
			<FormItem>
				<FormLabel>{label}</FormLabel>
				<FormControl>
					<Input placeholder={placeholder} type={type} {...field} />
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
);

export default InputFormField;
