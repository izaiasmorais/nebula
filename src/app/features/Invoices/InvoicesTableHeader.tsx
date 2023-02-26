import { Flex } from "@chakra-ui/react";
import { TableHeader } from "../../components/Global/TableHeader";

export function InvoicesTableHeader() {
	return (
		<TableHeader gridTemplateColumns="repeat(8, 1fr)">
			<Flex w="250px">Nome</Flex>
			<Flex w="130px">Criação</Flex>
			<Flex w="130px">Vencimento</Flex>
			<Flex w="120px">Valor</Flex>
			<Flex>Parcelas</Flex>
			<Flex w="120px">Status</Flex>
			<Flex>Editar</Flex>
			<Flex>Excluir</Flex>
		</TableHeader>
	);
}
