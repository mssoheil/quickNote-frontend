// Utils
import { cn } from "@/lib/utils";

type Props = { className?: string };

const Logo = ({ className }: Props) => {
	return (
		<div className={cn("flex items-center", className)}>
			<img
				src="/assets/images/quickNote_logo.png"
				alt="QuickNote Logo"
				width={35}
			/>
			<span className="font-bold text-3xl text-gray-700 ml-2">QuickNote</span>
		</div>
	);
};

export default Logo;
