import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function ProductsTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(8, 1fr)">
			<Flex w="200px">Nome</Flex>
			<Flex>Preço online</Flex>
			<Flex>Preço PDV</Flex>
			<Flex>Tipo</Flex>
			<Flex w="100px">Estoque Atual</Flex>
			<Flex w="120px">Estoque Mínimo</Flex>
			<Flex>Status</Flex>
			<Flex>Editar</Flex>
		</TableHeader>
	);
}
