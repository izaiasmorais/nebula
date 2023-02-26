import { Flex, Text } from "@chakra-ui/react";

export function PrintingLocationView() {
	return (
		<Flex
			bg="white"
			h="720px"
			w="1268px"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
		>
			<Text fontSize="2xl" fontWeight={500}>
				Local de Impressão
			</Text>
		</Flex>
	);
}
