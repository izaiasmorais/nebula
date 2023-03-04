import { Flex, Switch } from "@chakra-ui/react";
import { DotsThreeVertical } from "phosphor-react";
import { TableItem } from "../../components/Global/TableItem";

interface GroupsTableItemProps {
	name: string;
	priting: string;
	status: boolean;
}

export function GroupsTableItem({
	name,
	priting,
	status,
}: GroupsTableItemProps) {
	return (
		<TableItem gridTemplateColumns="repeat(6, 1fr)">
			<Flex gridColumn="1 / 3">{name}</Flex>

			<Flex gridColumn="3 / 5">{priting}</Flex>

			<Flex>
				<Switch colorScheme="green" isChecked={status} />
			</Flex>

			<Flex
				w={9}
				h={9}
				align="center"
				justify="center"
				borderRadius={50}
				cursor="pointer"
				transition="all 0.2s ease-in-out"
				_hover={{
					backgroundColor: "#F1F5F9",
				}}
			>
				<DotsThreeVertical size={30} color="black" />
			</Flex>
		</TableItem>
	);
}
