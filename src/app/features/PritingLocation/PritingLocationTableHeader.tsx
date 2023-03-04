import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function PritingLocationTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(5, 1fr)">
			<Flex>Nome</Flex>
			<Flex>Fabricante</Flex>
			<Flex>Modelo</Flex>
			<Flex>Comunicação</Flex>
			<Flex>Ativo</Flex>
		</TableHeader>
	);
}
