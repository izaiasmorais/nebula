import { Flex, SimpleGrid } from "@chakra-ui/react";

export function InvoiceTableHeader() {
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
			color="black"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="230px">Título</Flex>
			<Flex>Criado</Flex>
			<Flex>Vencimento</Flex>
			<Flex>Valor</Flex>
			<Flex>Parcela</Flex>
			<Flex>Status</Flex>
			<Flex>Editar</Flex>
			<Flex>Excluir</Flex>
		</SimpleGrid>
	);
}
