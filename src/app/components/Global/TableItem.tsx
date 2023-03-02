import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableItemProps extends SimpleGridProps {
	children?: ReactNode;
}

export function TableItem({ children, ...rest }: TableItemProps) {
	return (
		<SimpleGrid
			color="#959da8"
			alignItems="center"
			fontWeight="600"
			p=".5rem 1rem"
			gap="2rem"
			fontSize="14px"
			gridTemplateColumns="repeat(8, 1fr)"
			{...rest}
		>
			{children}
		</SimpleGrid>
	);
}
