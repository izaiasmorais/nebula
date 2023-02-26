import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaginationButtonProps extends ButtonProps {
	children?: ReactNode;
}

export function PaginationButton({
	children,

	...rest
}: PaginationButtonProps) {
	return (
		<Button
			bgColor="slate.200"
			_hover={{ bgColor: "slate.300" }}
			height="8"
			width="43px"
			borderRadius="md"
			cursor="pointer"
			fontSize="lg"
			fontWeight="medium"
			{...rest}
		>
			{children}
		</Button>
	);
}
