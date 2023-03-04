import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TabsBodProps {
	children: ReactNode;
}

export function TabsBody({ children }: TabsBodProps) {
	return (
		<Flex
			bg="white"
			h="750px"
			w="1268px"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
			justifyContent="space-between"
		>
			{children}
		</Flex>
	);
}
