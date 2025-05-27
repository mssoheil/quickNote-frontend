import type { ReactNode } from "react";
// UI components
import { Button } from "@/components/ui/button";

type Props = {
	children?: ReactNode;
};

const SubmitButton = ({ children }: Props) => {
	return (
		<Button
			type="submit"
			className="bg-blue-500 cursor-pointer w-full text-xl h-10 mt-4"
		>
			{children}
		</Button>
	);
};

export default SubmitButton;
