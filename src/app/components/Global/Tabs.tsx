import {
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import { InvoicesView } from "../../views/Invoices";

export function AppTabs() {
	const TabNames = [
		"Contas",
		"Produtos",
		"Grupos",
		"Observações",
		"Local de impressão",
	];

	return (
		<Flex>
			<Tabs variant="enclosed">
				<TabList w="700px" gap="1rem" ml="1rem" mb="-1rem">
					{TabNames.map((item) => (
						<Tab
							key={item}
							maxWidth="max-content"
							color="white"
							fontWeight={500}
							width="200px"
							_selected={{
								backgroundColor: "white",
								borderRadius: "1rem 1rem 0 0",
								color: "black",
							}}
						>
							{item}
						</Tab>
					))}
				</TabList>

				<TabPanels>
					<TabPanel>
						<InvoicesView />
					</TabPanel>

					<TabPanel>
						<p>two!</p>
					</TabPanel>

					<TabPanel>
						<p>two!</p>
					</TabPanel>

					<TabPanel>
						<p>two!</p>
					</TabPanel>

					<TabPanel>
						<p>two!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
