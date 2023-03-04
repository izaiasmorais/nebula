import { Flex } from "@chakra-ui/react";
import { useInvoice } from "../../store/Invoices/useInvoice";
import { useInvoicesPagination } from "../../store/Invoices/useInvoicesPagination";
import { InvoicesHeading } from "../features/Invoices/InvoicesHeading";
import { InvoiceModal } from "../features/Invoices/Modal/InvoiceModal";
import { InvoicesTableHeader } from "../features/Invoices/InvoicesTableHeader";
import { InvoicesTableItem } from "../features/Invoices/InvoicesTableItem";
import { Pagination } from "../components/Pagination/Pagination";
import { TabsBody } from "../components/Global/TabsBody";

export function InvoicesView() {
	const { invoices } = useInvoice();
	const { page, itemsPerPage, onChangePage } = useInvoicesPagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const invoicesData = invoices.slice(firstIndex, lastIndex);

	return (
		<TabsBody>
			<InvoicesHeading />

			<Flex direction="column" overflow="auto">
				<InvoicesTableHeader />
			</Flex>

			<Flex direction="column" overflow="auto" overflowY="hidden">
				{invoicesData?.map((i) => (
					<InvoicesTableItem
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
		</TabsBody>
	);
}
