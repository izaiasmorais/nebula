import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function GroupsTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(6, 1fr)">
			<Flex gridColumn="1 / 3">Nome</Flex>
			<Flex gridColumn="3 / 5">Local impressão</Flex>
			<Flex>Status</Flex>
			<Flex></Flex>
		</TableHeader>
	);
}
