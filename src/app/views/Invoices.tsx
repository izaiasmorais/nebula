import { Box, Flex } from "@chakra-ui/react";
import { useInvoice } from "../../store/Invoices/useInvoice";
import { useInvoicesPagination } from "../../store/Invoices/useInvoicesPagination";
import { InvoicesHeading } from "../features/Invoices/InvoicesHeading";
import { InvoiceModal } from "../features/Invoices/Modal/InvoiceModal";
import { InvoicesTableHeader } from "../features/Invoices/InvoicesTableHeader";
import { InvoicesTableItem } from "../features/Invoices/InvoicesTableItem";
import { TabsBody } from "../components/Global/TabsBody";
import { Pagination } from "../components/Global/Pagination";
import { ItemsList } from "../components/Global/List";

export function InvoicesView() {
	const { invoices } = useInvoice();
	const { page, itemsPerPage, onChangePage, onChangeItemsPerPage } =
		useInvoicesPagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const invoicesData = invoices.slice(firstIndex, lastIndex);

	return (
		<TabsBody>
			<Box>
				<InvoicesHeading />

				<InvoicesTableHeader />

				<ItemsList>
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
				</ItemsList>
			</Box>

			<Pagination
				currentPage={page}
				itemsPerPage={itemsPerPage}
				onChangePage={onChangePage}
				totalItems={invoices.length}
				onChangeItemsPerPage={onChangeItemsPerPage}
			/>

			<InvoiceModal />
		</TabsBody>
	);
}
