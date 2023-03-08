import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ItemsListProps {
	children: ReactNode;
}

export function ItemsList({ children }: ItemsListProps) {
	return (
		<Flex
			direction="column"
			overflow="auto"
			m="0"
			maxH="420px"
			className="container"
		>
			{children}
		</Flex>
	);
}
