import { Flex } from "@chakra-ui/react";
import { InvoiceType } from "../../../@types/types";
import { useInvoice } from "../../../store/Invoices/useInvoice";
import { formatDate } from "../../../utils/formatDate";
import { parseBadge } from "../../../utils/parseBadge";
import {
	DeleteButton,
	EditButton,
} from "../../components/Global/CustomButtons";
import { TableItem } from "../../components/Global/TableItem";

interface InvoicesTableItemProps extends InvoiceType {}

export function InvoicesTableItem({
	value,
	createAt,
	dueDate,
	id,
	installments,
	status,
	title,
}: InvoicesTableItemProps) {
	const { deleteInvoice } = useInvoice();

	return (
		<TableItem>
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
		</TableItem>
	);
}
