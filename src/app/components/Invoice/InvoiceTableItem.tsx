import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { PencilSimple, Trash } from "phosphor-react";
import { InvoiceType } from "../../../@types/types";
import { useInvoice } from "../../../store/Invoices/useInvoice";
import { formatDate } from "../../../utils/formatDate";
import { parseBadge } from "../../../utils/parseBadge";

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
			color="#959da8"
			alignItems="center"
			fontWeight="600"
			p="1rem"
			gap="2rem"
			fontSize="14px"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="250px">{title}</Flex>
			<Flex w="130px">{formatDate(createAt)}</Flex>
			<Flex w="130px">{formatDate(dueDate)}</Flex>
			<Flex w="120px">R$ {value}</Flex>
			<Flex>{installments}</Flex>
			<Flex w="120px">{parseBadge(status)}</Flex>
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
