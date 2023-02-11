import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

export function CouponTableHeader() {
	return (
		<SimpleGrid
			bg="#F1F5F9"
			mt="2.5rem"
			mb="1rem"
			alignItems="center"
			borderRadius=".5rem"
			fontWeight="600"
			p="1rem"
			gap="2rem"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="180px">Código</Flex>
			<Flex>Tipo</Flex>
			<Flex>Valor</Flex>
			<Flex>Total</Flex>
			<Flex>Disponível</Flex>
			<Flex>Ativo</Flex>
			<Flex>Editar</Flex>
			<Flex>Excluir</Flex>
		</SimpleGrid>
	);
}
