import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { InvoiceHeader } from "./components/Invoice/InvoiceHeader";
import { InvoiceModal } from "./components/Invoice/InvoiceModal";
import { InvoiceTableHeader } from "./components/Invoice/InvoiceTableHeader";
import { InvoiceTableItem } from "./components/Invoice/InvoiceTableItem";
import { useInvoice } from "./store/useInvoice";
import { api } from "./services/axios";
import { usePagination } from "./store/usePagination";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
	const { invoices, setInvoices } = useInvoice();
	const { page, itemsPerPage, onChangePage, onChangeItemsPerPage } =
		usePagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const invoicesData = invoices.slice(firstIndex, lastIndex);

	return (
		<Flex bg="purple.500" w="full" h="100vh" p="1rem">
			<Flex
				w="full"
				borderRadius="1rem"
				bg="white"
				maxW="1300px"
				mx="auto"
				my="auto"
				textAlign="center"
				display="flex"
				p={["1.5rem", "2rem", "2.5rem"]}
				flexDirection="column"
			>
				<Text color="purple.500" as="strong">
					Contas
				</Text>

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
			</Flex>

			<InvoiceModal />
		</Flex>
	);
}

export default App;
