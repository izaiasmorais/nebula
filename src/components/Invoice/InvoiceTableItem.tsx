import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { PencilSimple, Trash } from "phosphor-react";
import { InvoiceType } from "../../@types/types";
import { useInvoice } from "../../store/useInvoice";
import { formatDate } from "../../utils/formatDate";

interface InvoiceTableItemProps extends InvoiceType {}

export function InvoiceTableItem({
	value,
	createAt,
	dueDate,
	id,
	installments,
	status,
	title,
}: InvoiceTableItemProps) {
	const { deleteInvoice } = useInvoice();

	return (
		<SimpleGrid
			color="#64748B"
			alignItems="center"
			fontWeight="600"
			p="1rem"
			gap="2rem"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="230px">{title}</Flex>
			<Flex>{formatDate(createAt)}</Flex>
			<Flex>{formatDate(dueDate)}</Flex>
			<Flex>R$ {value}</Flex>
			<Flex>{installments}</Flex>
			<Flex>{status}</Flex>
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
					onClick={() => deleteInvoice(id)}
				/>
			</Flex>
		</SimpleGrid>
	);
}
