import { Flex, SimpleGrid } from "@chakra-ui/react";
import { InvoiceType } from "../../../@types/types";
import { useInvoice } from "../../../store/Invoices/useInvoice";
import { formatDate } from "../../../utils/formatDate";
import { parseBadge } from "../../../utils/parseBadge";
import {
	DeleteButton,
	EditButton,
} from "../../components/Global/CustomButtons";

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
				<EditButton />
			</Flex>
			<Flex>
				<DeleteButton onClick={() => deleteInvoice(id)} />
			</Flex>
		</SimpleGrid>
	);
}
