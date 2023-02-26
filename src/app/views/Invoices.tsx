import { Flex } from "@chakra-ui/react";
import { useInvoice } from "../../store/Invoices/useInvoice";
import { usePagination } from "../../store/usePagination";
import { InvoiceHeader } from "../components/Invoice/InvoiceHeader";
import { InvoiceModal } from "../features/Invoices/Modal/InvoiceModal";
import { InvoiceTableHeader } from "../components/Invoice/InvoiceTableHeader";
import { InvoiceTableItem } from "../components/Invoice/InvoiceTableItem";
import { Pagination } from "../components/Pagination/Pagination";

export function InvoicesView() {
	const { invoices } = useInvoice();
	const { page, itemsPerPage, onChangePage } = usePagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const invoicesData = invoices.slice(firstIndex, lastIndex);

	return (
		<Flex
			bg="white"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
		>
			<InvoiceHeader />

			<Flex direction="column" overflow="auto">
				<InvoiceTableHeader />
			</Flex>

			<Flex direction="column" overflow="auto" overflowY="hidden">
				{invoicesData?.map((i) => (
					<InvoiceTableItem
						key={i.id}
						id={i.id}
						installments={i.installments}
						createAt={i.createAt}
						dueDate={i.dueDate}
						value={i.value}
						title={i.title}
						status={i.status}
					/>
				))}
			</Flex>

			<Flex mt="4rem">
				<Pagination
					currentPage={page}
					itemsPerPage={itemsPerPage}
					onChangePage={onChangePage}
					totalItems={invoices.length}
				/>
			</Flex>

			<InvoiceModal />
		</Flex>
	);
}
