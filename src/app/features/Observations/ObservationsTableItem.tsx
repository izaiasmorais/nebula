import { Flex, Switch } from "@chakra-ui/react";
import { DotsThreeVertical } from "phosphor-react";
import { TableItem } from "../../components/Global/TableItem";

export function ObservationsTableItem() {
	return (
		<TableItem gridTemplateColumns="repeat(8, 1fr)">
			<Flex gridColumn="1 / 7">Sem Cebola</Flex>
			<Flex>
				<Switch colorScheme="green" />
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
