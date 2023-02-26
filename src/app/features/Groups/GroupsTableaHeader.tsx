import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function GroupsTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(5, 1fr)">
			<Flex>Nome</Flex>
			<Flex>Modelo</Flex>
			<Flex>Local impressão</Flex>
			<Flex>Status</Flex>
			<Flex>Editar</Flex>
		</TableHeader>
	);
}
