import { Flex, Text } from "@chakra-ui/react";
import { ProductsHeading } from "../features/Products/ProductsHeading";
import { ProductsTableHeader } from "../features/Products/ProductsTableHeader";

export function ProductTypeView() {
	return (
		<Flex
			bg="white"
			h="720px"
			w="1268px"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
		>
			Tipo de produto
		</Flex>
	);
}
