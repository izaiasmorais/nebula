import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function ObservationsTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(8, 1fr)">
			<Flex gridColumn="1 / 7">Título</Flex>
			<Flex>Status</Flex>
			<Flex>Editar</Flex>
		</TableHeader>
	);
}
