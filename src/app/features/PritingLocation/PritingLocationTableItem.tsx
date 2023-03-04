import { Flex } from "@chakra-ui/react";
import { TableItem } from "../../components/Global/TableItem";

interface PritingLocationTableItemProps {
	name: string;
	faber: string;
	model: string;
	comunication: string;
	active: boolean;
}

export function PritingLocationTableItem({
	active,
	comunication,
	faber,
	model,
	name,
}: PritingLocationTableItemProps) {
	return (
		<TableItem gridTemplateColumns="repeat(5, 1fr)">
			<Flex>{name}</Flex>
			<Flex>{faber}</Flex>
			<Flex>{model}</Flex>
			<Flex>{comunication}</Flex>
			<Flex>{active ? "Sim" : "Não"} </Flex>
		</TableItem>
	);
}
