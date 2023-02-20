import { Flex, SimpleGrid } from "@chakra-ui/react";

export function InvoiceTableHeader() {
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
			fontSize="14px"
			color="black"
			overflow="auto"
			overflowY="hidden"
			w="full"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="250px">Título</Flex>
			<Flex w="130px">Criação</Flex>
			<Flex w="130px">Vencimento</Flex>
			<Flex w="120px">Valor</Flex>
			<Flex>Parcelas</Flex>
			<Flex w="120px">Status</Flex>
			<Flex>Editar</Flex>
			<Flex>Excluir</Flex>
		</SimpleGrid>
	);
}
