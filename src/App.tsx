import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { InvoiceHeader } from "./components/Invoice/InvoiceHeader";
import { InvoiceModal } from "./components/Invoice/InvoiceModal";
import { InvoiceTableHeader } from "./components/Invoice/InvoiceTableHeader";
import { InvoiceTableItem } from "./components/Invoice/InvoiceTableItem";
import { useInvoice } from "./store/useInvoice";
import { api } from "./services/axios";

function App() {
	const { invoices, setInvoices } = useInvoice();

	useQuery(["get-invoices"], async () => {
		const response = await api.get("/invoices");

		setInvoices(response.data);
	});

	return (
		<Flex bg="purple.500" w="full" h="100vh" p="1rem">
			<Flex
				w="full"
				maxW="1300px"
				bg="white"
				maxH="700px"
				borderRadius="1rem"
				mx="auto"
				mt="5rem"
				textAlign="center"
				display="flex"
				p="2.5rem"
				flexDirection="column"
			>
				<Text color="purple.500" as="strong">
					Contas
				</Text>

				<InvoiceHeader />

				<InvoiceTableHeader />

				{invoices?.map((i) => (
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

			<InvoiceModal />
		</Flex>
	);
}

export default App;
