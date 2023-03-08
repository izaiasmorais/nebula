import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableHeaderProps extends SimpleGridProps {
	children?: ReactNode;
}

export function TableHeader({ children, ...rest }: TableHeaderProps) {
	return (
		<SimpleGrid
			bg="#F1F5F9"
			p="1rem"
			gap="2rem"
			alignItems="center"
			borderRadius=".5rem"
			fontWeight="600"
			color="black"
			w="full"
			{...rest}
		>
			{children}
		</SimpleGrid>
	);
}
