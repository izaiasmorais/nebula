import { Flex, Text } from "@chakra-ui/react";

export function CouponTableHeader() {
	return (
		<Flex
			bg="#F1F5F9"
			border="none"
			overflow="hidden"
			mt="2.5rem"
			justifyContent="space-between"
			borderRadius=".5rem"
			fontWeight="600"
			px="2rem"
			py=".5rem"
		>
			<Text>Código</Text>
			<Text>Tipo</Text>
			<Text>Valor</Text>
			<Text>Total</Text>
			<Text>Disponível</Text>
			<Text>Ativo</Text>
			<Text>Editar</Text>
			<Text>Excluir</Text>
		</Flex>
	);
}
