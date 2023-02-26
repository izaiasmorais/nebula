import {
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import { GroupsView } from "../../views/Groups";
import { InvoicesView } from "../../views/Invoices";
import { ObservationsView } from "../../views/Observations";
import { PrintingLocationView } from "../../views/PritingLocation";
import { ProductsView } from "../../views/Products";

export function AppTabs() {
	const TabNames = [
		"Produtos",
		"Grupos",
		"Contas",
		"Observações",
		"Local de impressão",
	];

	return (
		<Flex>
			<Tabs variant="enclosed" border="transparent">
				<TabList w="700px" gap="1rem" ml="1rem" mb="-1rem" h="50px">
					{TabNames.map((item) => (
						<Tab
							key={item}
							maxWidth="max-content"
							color="white"
							transition="none"
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
						<ProductsView />
					</TabPanel>

					<TabPanel>
						<GroupsView />
					</TabPanel>

					<TabPanel>
						<InvoicesView />
					</TabPanel>

					<TabPanel>
						<ObservationsView />
					</TabPanel>

					<TabPanel>
						<PrintingLocationView />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
