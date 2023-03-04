import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableHeaderProps extends SimpleGridProps {
	children?: ReactNode;
}

export function TableHeader({ children, ...rest }: TableHeaderProps) {
	return (
		<SimpleGrid
			bg="#F1F5F9"
			mt="2.5rem"
			mb="1rem"
			p="1rem"
			gap="2rem"
			alignItems="center"
			borderRadius=".5rem"
			fontWeight="600"
			color="black"
			overflow="auto"
			overflowY="hidden"
			w="full"
			{...rest}
		>
			{children}
		</SimpleGrid>
	);
}
