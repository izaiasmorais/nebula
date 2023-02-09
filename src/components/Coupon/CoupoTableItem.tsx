import { Button, Flex, Switch, Text } from "@chakra-ui/react";
import { PencilSimple, Trash } from "phosphor-react";

export function CoupoTableItem() {
	return (
		<Flex
			border="none"
			overflow="hidden"
			justifyContent="space-between"
			borderRadius=".5rem"
			fontWeight="600"
			color="#64748B"
			px="2rem"
			py="1rem"
		>
			<Flex>SEGUNDOU100OFF</Flex>
			<Flex>Percentual</Flex>
			<Flex>R$ 25,00</Flex>
			<Flex>25</Flex>
			<Flex>14</Flex>
			<Flex>
				{" "}
				<Switch colorScheme="green" />
			</Flex>
			<Flex>
				<Button
					maxW="1rem"
					display="flex"
					alignItems="center"
					paddingRight=".5rem"
					borderRadius=".6rem"
					leftIcon={<PencilSimple size={20} />}
				/>
			</Flex>
			<Flex>
				<Button
					maxW="1rem"
					colorScheme="red"
					display="flex"
					alignItems="center"
					paddingRight=".5rem"
					borderRadius=".6rem"
					leftIcon={<Trash size={20} />}
				/>
			</Flex>
		</Flex>
	);
}
